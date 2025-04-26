import { writeJson } from '../utils/writer';
import { LoginService } from '../service/Login.Service';
import {
  Created,
  InternalServerError,
  Validacao,
} from '../utils/mensagens-ptbr';
import { Users } from '../Model/User.Model';

const loginService = new LoginService();

export async function loginController(
  req: { body: { login: string; password: string } },
  res: Express.Response,
): Promise<boolean> {
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
export async function createUserController(
  req: Request,
  res: Response,
): Promise<boolean> {
  try {
    const user = Users.build(req.body);

    const newUser = loginService.createUser(user);

    return writeJson(res, newUser, Created);
  } catch (e) {
    console.error(e);
    return writeJson(res, InternalServerError);
  }
}
