import { Users } from '../Model/User.Model';

export async function GetLoginRepository(login: string): Promise<Users> {
  try {
    const [user] = await Promise.all([Users.findOne(
      {
        where: { email: login },
        attributes: ['id', 'name', 'email', 'password']
      })]);

    return user;
  } catch (e) {
    return e;
  }
}