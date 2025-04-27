import { writeJson } from '../utils/writer';
import { LoginService } from '../service/Login.Service';
import { InternalServerError, Validacao } from '../utils/mensagens-ptbr';
import type { Users } from '../Model/User.Model';

const loginService = new LoginService();

export async function loginController(req, res): Promise<boolean> {
  try {
    const authentication: { login: string; password: string } = req.body;

    if (!authentication.login) {
      return writeJson(res, Validacao.Login);
    }
    if (!authentication.password) {
      return writeJson(res, Validacao.password);
    }

    const user = await loginService.loginUserService(
      authentication.login,
      authentication.password,
    );

    return writeJson(res, user);
  } catch (e) {
    console.error(e);
    return writeJson(res, InternalServerError);
  }
}
export async function createUserController(req, res) {
  try {
    const user: Users = req.body;

    const newUser = await loginService.createUserRepository(user);

    return writeJson(res, newUser);
  } catch (e) {
    console.error('Erro ao criar usuario', e);
    return writeJson(res, InternalServerError);
  }
}
export async function getAllUsersController(req, res) {
  try {
    const allUsers = await loginService.getAllUserService();

    return writeJson(res, allUsers);
  } catch (e) {
    console.error('Erro ao buscar os usuarios', e);
    return writeJson(res, InternalServerError);
  }
}
export async function getUserByIdController(req, res) {
  try {
    const id = req.params.id;

    const user = await LoginService.getUserByIdService(id);

    return writeJson(res, user);
  } catch (e) {
    console.error('Erro ao buscar os usuarios', e);
    return writeJson(res, InternalServerError);
  }
}
export async function updateUserController(req, res) {
  try {
    const id = req.params.id;
    const user: Users = req.body;

    const updateUser = await loginService.updateUserService(id, user);

    return writeJson(res, updateUser);
  } catch (error) {
    console.error('Erro ao atualizar os usuarios', error);
    return writeJson(res, InternalServerError);
  }
}
export async function deleteUserController(req, res) {
  try {
    const id = req.params.id;

    const deleteUser = await loginService.deleteUserService(id);
    return writeJson(res, deleteUser.Ok);
  } catch (error) {
    console.error('Erro ao deletar os usuarios', error);
    return writeJson(res, InternalServerError);
  }
}
