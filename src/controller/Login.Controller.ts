import { writeJson } from '../utils/writer';
import { LoginService } from '../service/Login.Service';
import { InternalServerError } from '../utils/mensagens-ptbr';

const loginService = new LoginService();

export async function LoginController(req: Request, res: Response) : Promise<boolean> {
  try {
    const login = req.body.login;
    const password = req.body.password;

    const user = await loginService.loginUserService(login, password);

    return writeJson(res, user);
  } catch (e) {
console.error(e);
return writeJson(res, InternalServerError)
  }
}