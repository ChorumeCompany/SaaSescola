import { Users } from '../Model/User.Model';
import { sequelize } from '../database/database';

export async function getLoginRepository(login: string): Promise<Users> {
  try {
    let user: Users = await Users.findOne({
      where: { email: login },
      attributes: ['id', 'name', 'email', 'password'],
    });

    return user;
  } catch (e) {
    return e;
  }
}
export async function createUserRepository(user: Users): Promise<Users> {
  const t = await sequelize.transaction();

  const currentDate = new Date();
  let passwordExpirantionDate: Date;
  passwordExpirantionDate = new Date(
    currentDate.setMonth(currentDate.getMonth() + 3),
  );
  user.passwordExpires = passwordExpirantionDate;

  user.oldPassword = user.password;
  try {
    const newUser = await Users.create(user, { transaction: t });

    await t.commit();
    return newUser;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    await t.rollback();
    throw error;
  }
}
export async function getAllUsersRepository(): Promise<Users[]> {
  try {
    return await Users.findAll();
  } catch (error) {
    console.error('Erro ao buscar os usuarios', error);
    throw error;
  }
}
export async function getUserByIdRepository(id: number): Promise<Users> {
  try {
    return await Users.findByPk(id);
  } catch (error) {
    console.error('Erro ao buscar os usuarios', error);
  }
}
export async function updateUserRepository(
  id: number,
  user: Users,
): Promise<Users> {
  const t = await sequelize.transaction();
  try {
    const existingUser = await Users.findByPk(id);
    if (!existingUser) {
      return null;
    }
    await existingUser.update(user, { transaction: t });
    await t.commit();
    return existingUser;
  } catch (error) {
    await t.rollback();
    console.error('Erro ao atualizar os usuarios', error);
    throw error;
  }
}
export async function deleteUserRepository(id: number): Promise<void> {
  const t = await sequelize.transaction();
  try {
    const existingUser = await Users.findByPk(id);
    if (!existingUser) {
      return null;
    }
    return await existingUser.destroy({ transaction: t });
  } catch (error) {
    await t.rollback();
    console.error('Erro ao deletar os usuarios', error);
    throw error;
  }
}
