import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import {
  respondWithCode,
  returnResponse,
  writeJson,
} from '../../src/utils/writer';

class MockResponse {
  writeHead = jest.fn();
  end = jest.fn();
}

describe('respondWithCode', () => {
  it('should return an object with code and payload', () => {
    const result = respondWithCode(201, { foo: 'bar' });
    expect(result).toBeDefined();
    expect(result.code).toBe(201);
    expect(result.payload).toEqual({ foo: 'bar' });
  });
});

describe('writeJson', () => {
  let mockRes: MockResponse;

  beforeEach(() => {
    mockRes = new MockResponse();
    jest.clearAllMocks();
  });

  it('should write JSON response with default code 200', () => {
    const payload = { hello: 'world' };
    const result = writeJson(mockRes, payload);
    expect(mockRes.writeHead).toHaveBeenCalledWith(200, {
      'Content-Type': 'application/json',
    });
    expect(mockRes.end).toHaveBeenCalledWith(JSON.stringify(payload, null, 2));
    expect(result).toBe(true);
  });

  it('should write JSON response with provided status code', () => {
    const payload = { foo: 'bar' };
    const result = writeJson(mockRes, payload, 404);
    expect(mockRes.writeHead).toHaveBeenCalledWith(404, {
      'Content-Type': 'application/json',
    });
    expect(mockRes.end).toHaveBeenCalledWith(JSON.stringify(payload, null, 2));
    expect(result).toBe(true);
  });

  it('should handle ResponsePayload instance as first argument', () => {
    const payloadObj = respondWithCode(201, { test: 123 });
    const result = writeJson(mockRes, payloadObj);
    expect(mockRes.writeHead).toHaveBeenCalledWith(201, {
      'Content-Type': 'application/json',
    });
    expect(mockRes.end).toHaveBeenCalledWith(
      JSON.stringify({ test: 123 }, null, 2),
    );
    expect(result).toBe(true);
  });

  it('should add API-OAUTH-METADATA-FOR-ACCESSTOKEN header if id_usuario is provided', () => {
    const payload = { foo: 'bar' };
    writeJson(mockRes, payload, 200, 'user-123');
    expect(mockRes.writeHead).toHaveBeenCalledWith(200, {
      'Content-Type': 'application/json',
      'API-OAUTH-METADATA-FOR-ACCESSTOKEN': 'user-123',
    });
  });

  it('should stringify non-object payloads as is', () => {
    writeJson(mockRes, 'simple string', 200);
    expect(mockRes.end).toHaveBeenCalledWith('simple string');
  });

  it('should use arg1 as code if it is an integer', () => {
    writeJson(mockRes, { foo: 'bar' }, 204);
    expect(mockRes.writeHead).toHaveBeenCalledWith(204, {
      'Content-Type': 'application/json',
    });
    expect(mockRes.end).toHaveBeenCalledWith(
      JSON.stringify({ foo: 'bar' }, null, 2),
    );
  });
});

describe('returnResponse', () => {
  it('should return an object with response and statusCode', () => {
    const mockRes = {};
    const result = returnResponse(mockRes, 500);
    expect(result).toEqual({ response: mockRes, statusCode: 500 });
  });
});
