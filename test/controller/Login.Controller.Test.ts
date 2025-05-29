import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserByIdController,
  loginController,
  updateUserController,
} from '../../src/controller/Login.Controller';
import { LoginService } from '../../src/service/Login.Service';
import { validarCPFouCNPJ } from '../../src/utils/documentValidator';
import { internaServerError, validacao } from '../../src/utils/mensagens-ptbr';
import { writeJson } from '../../src/utils/writer';

jest.mock('../../src/utils/writer');
jest.mock('../../src/service/Login.Service');
jest.mock('../../src/utils/mensagens-ptbr', () => ({
  internaServerError: { message: 'Erro interno' },
  validacao: {
    Login: { message: 'Login obrigatório' },
    password: { message: 'Senha obrigatória' },
  },
}));
jest.mock('../../src/utils/documentValidator');

const mockRes = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnThis();
  res.json = jest.fn().mockReturnThis();
  return res;
};

describe('Login.Controller', () => {
  let req: any;
  let res: any;

  beforeEach(() => {
    jest.clearAllMocks();
    req = {};
    res = mockRes();
  });
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  describe('loginController', () => {
    it('should return error if login is missing', async () => {
      req.body = { password: '123' };
      await loginController(req, res);
      expect(writeJson).toHaveBeenCalledWith(res, validacao.Login);
    });

    it('should return error if password is missing', async () => {
      req.body = { login: 'user' };
      await loginController(req, res);
      expect(writeJson).toHaveBeenCalledWith(res, validacao.password);
    });

    it('should call loginUserService and return user', async () => {
      req.body = { login: 'user', password: 'pass' };
      const fakeUser = { id: 1, name: 'Test' };
      (LoginService.prototype.loginUserService as jest.Mock).mockResolvedValue(
        fakeUser,
      );

      await loginController(req, res);

      expect(LoginService.prototype.loginUserService).toHaveBeenCalledWith(
        'user',
        'pass',
      );
      expect(writeJson).toHaveBeenCalledWith(res, fakeUser);
    });

    it('should handle errors and return internaServerError', async () => {
      req.body = { login: 'user', password: 'pass' };
      (LoginService.prototype.loginUserService as jest.Mock).mockRejectedValue(
        new Error('fail'),
      );

      await loginController(req, res);

      expect(writeJson).toHaveBeenCalledWith(res, internaServerError);
    });
  });

  describe('createUserController', () => {
    it('should return 422 if CPF/CNPJ is invalid', async () => {
      req.body = { document: 'invalid' };
      (validarCPFouCNPJ as jest.Mock).mockResolvedValue(422);

      await createUserController(req, res);

      expect(writeJson).toHaveBeenCalledWith(res, { message: undefined }, 422);
    });

    it('should create user if CPF/CNPJ is valid', async () => {
      req.body = { document: 'valid', name: 'User' };
      (validarCPFouCNPJ as jest.Mock).mockResolvedValue(true);
      const fakeUser = { id: 1, name: 'User' };
      (
        LoginService.prototype.createUserRepository as jest.Mock
      ).mockResolvedValue(fakeUser);

      await createUserController(req, res);

      expect(LoginService.prototype.createUserRepository).toHaveBeenCalledWith(
        req.body,
      );
      expect(writeJson).toHaveBeenCalledWith(res, fakeUser);
    });

    it('should handle errors and return internaServerError', async () => {
      req.body = { document: 'valid', name: 'User' };
      (validarCPFouCNPJ as jest.Mock).mockResolvedValue(true);
      (
        LoginService.prototype.createUserRepository as jest.Mock
      ).mockRejectedValue(new Error('fail'));

      await createUserController(req, res);

      expect(writeJson).toHaveBeenCalledWith(res, internaServerError);
    });
  });

  describe('getAllUsersController', () => {
    it('should return all users', async () => {
      const fakeUsers = [{ id: 1 }, { id: 2 }];
      (LoginService.prototype.getAllUserService as jest.Mock).mockResolvedValue(
        fakeUsers,
      );

      await getAllUsersController(req, res);

      expect(LoginService.prototype.getAllUserService).toHaveBeenCalled();
      expect(writeJson).toHaveBeenCalledWith(res, fakeUsers);
    });

    it('should handle errors and return internaServerError', async () => {
      (LoginService.prototype.getAllUserService as jest.Mock).mockRejectedValue(
        new Error('fail'),
      );

      await getAllUsersController(req, res);

      expect(writeJson).toHaveBeenCalledWith(res, internaServerError);
    });
  });

  describe('getUserByIdController', () => {
    it('should return user by id', async () => {
      req.params = { id: '123' };
      const fakeUser = { id: 123, name: 'Test' };
      (LoginService.getUserByIdService as jest.Mock).mockResolvedValue(
        fakeUser,
      );

      await getUserByIdController(req, res);

      expect(LoginService.getUserByIdService).toHaveBeenCalledWith('123');
      expect(writeJson).toHaveBeenCalledWith(res, fakeUser);
    });

    it('should handle errors and return internaServerError', async () => {
      req.params = { id: '123' };
      (LoginService.getUserByIdService as jest.Mock).mockRejectedValue(
        new Error('fail'),
      );

      await getUserByIdController(req, res);

      expect(writeJson).toHaveBeenCalledWith(res, internaServerError);
    });
  });

  describe('updateUserController', () => {
    it('should update user', async () => {
      req.params = { id: '1' };
      req.body = { name: 'Updated' };
      const fakeUser = { id: 1, name: 'Updated' };
      (LoginService.prototype.updateUserService as jest.Mock).mockResolvedValue(
        fakeUser,
      );

      await updateUserController(req, res);

      expect(LoginService.prototype.updateUserService).toHaveBeenCalledWith(
        '1',
        req.body,
      );
      expect(writeJson).toHaveBeenCalledWith(res, fakeUser);
    });

    it('should handle errors and return internaServerError', async () => {
      req.params = { id: '1' };
      req.body = { name: 'Updated' };
      (LoginService.prototype.updateUserService as jest.Mock).mockRejectedValue(
        new Error('fail'),
      );

      await updateUserController(req, res);

      expect(writeJson).toHaveBeenCalledWith(res, internaServerError);
    });
  });

  describe('deleteUserController', () => {
    it('should delete user and return Ok', async () => {
      req.params = { id: '1' };
      (LoginService.prototype.deleteUserService as jest.Mock).mockResolvedValue(
        { Ok: 'Deleted' },
      );

      await deleteUserController(req, res);

      expect(LoginService.prototype.deleteUserService).toHaveBeenCalledWith(
        '1',
      );
      expect(writeJson).toHaveBeenCalledWith(res, 'Deleted');
    });

    it('should handle errors and return internaServerError', async () => {
      req.params = { id: '1' };
      (LoginService.prototype.deleteUserService as jest.Mock).mockRejectedValue(
        new Error('fail'),
      );

      await deleteUserController(req, res);

      expect(writeJson).toHaveBeenCalledWith(res, internaServerError);
    });
  });
});
