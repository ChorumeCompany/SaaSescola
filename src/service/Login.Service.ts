import { Accepted, NotFound, Unauthorized } from '../utils/mensagens-ptbr';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { GetLoginRepository } from '../Repository/Login.Repository';


export class LoginService {
  private static instance: LoginService
  constructor() {
    if(LoginService.instance) return LoginService.instance
    LoginService.instance = this;
  }
  async loginUserService(login:string,password:string){
    const user = await GetLoginRepository( login )
    if(!user) return {NotFound, message: 'User not found'};

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch) return {Unauthorized, message: 'Password not match'};

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      process.env.SECRET,
      {
        expiresIn: '2h',
      }
    )

    return {
      Accepted, message: 'User logged in',
      Bearer: token
    }
  }
}