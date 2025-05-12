import { loginController } from '../../src/controller/Login.Controller';
import { LoginService } from '../../src/service/Login.Service';
import {
  accepted,
  internaServerError,
  validacao,
} from '../../src/utils/mensagens-ptbr';
import { writeJson } from '../../src/utils/writer';

jest.mock('../../src/utils/mensagens-ptbr', () => ({
  accepted: {
    img: 'https://http.cat/status/200',
    message: 'Accepted',
    statusCode: 200,
  },
  internaServerError: {
    img: 'https://http.cat/status/500',
    message: 'Internal Server Error.',
    statusCode: 500,
  },
  validacao: {
    Login: { message: 'Login is required' },
    password: { message: 'Password is required' },
  },
}));

jest.mock('../../src/service/Login.Service');
jest.mock('../../src/utils/writer');

const mockRequest = (body = {}) => ({
  body,
});

const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('loginController', () => {
  let loginServiceMock: jest.Mocked<LoginService>;

  beforeEach(() => {
    loginServiceMock = new LoginService() as jest.Mocked<LoginService>;
    (LoginService as unknown as jest.Mock).mockImplementation(
      () => loginServiceMock,
    );
  });

  it('should return validation error if login is missing', async () => {
    const req = mockRequest({ password: 'password123' });
    const res = mockResponse();

    await loginController(req, res);

    expect(writeJson).toHaveBeenCalledWith(res, validacao.Login);
  });

  it('should return validation error if password is missing', async () => {
    const req = mockRequest({ login: 'user@example.com' });
    const res = mockResponse();

    await loginController(req, res);

    expect(writeJson).toHaveBeenCalledWith(res, validacao.password);
  });

  //   it('should call loginUserService and return user data on success', async () => {
  //     const req = mockRequest({
  //       login: 'user@example.com',
  //       password: 'password123',
  //     });
  //     const res = mockResponse();
  //     const mockUser = {
  //       Accepted: accepted,
  //       message: 'Login successful',
  //       Bearer: 'token123',
  //     };

  //     loginServiceMock.loginUserService.mockResolvedValue(mockUser);

  //     expect(LoginService.prototype.loginUserService).toHaveBeenCalledWith(
  //       'user@example.com',
  //       'password123',
  //     );
  //   });

  //   it('should return internal server error on exception', async () => {
  //     const req = mockRequest({
  //       login: 'user@example.com',
  //       password: 'password123',
  //     });
  //     const res = mockResponse();

  //     loginServiceMock.loginUserService.mockRejectedValue(
  //       new Error('Service error'),
  //     );

  //     await loginController(req, res);

  //     expect(writeJson).toHaveBeenCalledWith(res, internaServerError);
  //   });
});
