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
    let newUser: Users = await Users.create(user.dataValues, {
      transaction: t,
    });
    await t.commit();
    return newUser;
  } catch (error) {
    await t.rollback();
    throw error;
  }
}
