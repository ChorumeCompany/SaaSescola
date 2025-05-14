import { authenticateToken } from './authMiddleware';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import type { Request, Response, NextFunction } from 'express';

jest.mock('jsonwebtoken');
jest.mock('dotenv');

describe('authenticateToken middleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    process.env.SECRET = 'testsecret';
    req = {
      headers: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
    (jwt.verify as jest.Mock).mockReset();
  });

  it('should return 401 if no token is provided', () => {
    req.headers = {};
    authenticateToken(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Acesso negado! Token não fornecido.',
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('should return 401 if authorization header is malformed', () => {
    req.headers = { authorization: 'Bearer' }; // no token after Bearer
    authenticateToken(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Acesso negado! Token não fornecido.',
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next and set req.user if token is valid', () => {
    const fakeDecoded = { id: 1, name: 'Test' };
    (jwt.verify as jest.Mock).mockReturnValue(fakeDecoded);
    req.headers = { authorization: 'Bearer validtoken' };

    authenticateToken(req as Request, res as Response, next);

    expect(jwt.verify).toHaveBeenCalledWith('validtoken', 'testsecret');
    expect((req as any).user).toEqual(fakeDecoded);
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it('should return 403 if token is invalid or expired', () => {
    (jwt.verify as jest.Mock).mockImplementation(() => {
      throw new Error('invalid token');
    });
    req.headers = { authorization: 'Bearer invalidtoken' };

    authenticateToken(req as Request, res as Response, next);

    expect(jwt.verify).toHaveBeenCalledWith('invalidtoken', 'testsecret');
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Token inválido ou expirado.',
        error: expect.any(Error),
      }),
    );
    expect(next).not.toHaveBeenCalled();
  });

  it('should use process.env.SECRET as secret', () => {
    process.env.SECRET = 'mysecret';
    (jwt.verify as jest.Mock).mockReturnValue({ user: 'abc' });
    req.headers = { authorization: 'Bearer sometoken' };

    authenticateToken(req as Request, res as Response, next);

    expect(jwt.verify).toHaveBeenCalledWith('sometoken', 'mysecret');
    expect(next).toHaveBeenCalled();
  });
});
