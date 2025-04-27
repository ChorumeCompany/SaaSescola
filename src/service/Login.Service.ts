import {
  Accepted,
  Created,
  InternalServerError,
  NotFound,
  Ok,
  Unauthorized,
} from '../utils/mensagens-ptbr';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
  createUserRepository,
  deleteUserRepository,
  getAllUsersRepository,
  getLoginRepository,
  getUserByIdRepository,
  updateUserRepository,
} from '../Repository/Login.Repository';
import type { Users } from '../Model/User.Model';

export class LoginService {
  private static instance: LoginService;
  constructor() {
    if (LoginService.instance) return LoginService.instance;
    LoginService.instance = this;
  }
  async loginUserService(login: string, password: string) {
    try {
      const user: Users = await getLoginRepository(login);
      if (!user)
        return { statusCode: NotFound.statusCode, message: NotFound.message };

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return {
          statusCode: Unauthorized.statusCode,
          message: 'Senha inválida',
        };
      }

      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        process.env.SECRET as string,
        {
          expiresIn: '2h',
        },
      );

      return {
        Accepted,
        message: 'User logged in',
        Bearer: `Bearer ${token}`,
      };
    } catch (error) {
      return {
        statusCode: InternalServerError.statusCode,
        message: error,
      };
    }
  }
  async createUserRepository(user: Users) {
    try {
      let passwordHash: string;
      passwordHash = await bcrypt.hash(user.password, 10);
      user.password = passwordHash;

      let securityResponseHash: string;
      securityResponseHash = await bcrypt.hash(user.securityResponse, 10);
      user.securityResponse = securityResponseHash;

      let newUser: Users;
      newUser = await createUserRepository(user);

      return {
        message: 'Usuario criado com sucesso',
        data: newUser,
        statusCode: Created,
      };
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error('Erro ao criar usuário');
    }
  }
  async getAllUserService() {
    try {
      const allUsers = await getAllUsersRepository();
      if (!allUsers) {
        return { NotFound };
      }

      return { Ok, allUsers };
    } catch (error) {
      console.error('Erro ao buscar os usuarios', error);
      return { error, InternalServerError };
    }
  }
  static async getUserByIdService(id: number) {
    try {
      const user = await getUserByIdRepository(id);
      if (!user) {
        return { NotFound };
      }
      return { Ok, user };
    } catch (error) {
      console.error('Erro ao buscar os usuarios', error);
      return { error, InternalServerError };
    }
  }
  async updateUserService(id: number, user: Users) {
    try {
      const updateUser = await updateUserRepository(id, user);
      if (!updateUser) {
        return { NotFound };
      }
      return { Ok, updateUser };
    } catch (error) {
      console.error('Erro ao atualizar os usuarios', error);
      return { error, InternalServerError };
    }
  }
  async deleteUserService(id: number) {
    try {
      const deleteUser = await deleteUserRepository(id);
      return { Ok, deleteUser };
    } catch (error) {
      console.error('Erro ao deletar os usuarios', error);
      return { error, InternalServerError };
    }
  }
}
