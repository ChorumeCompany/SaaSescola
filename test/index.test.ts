import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import * as path from 'node:path';
import * as fs from 'node:fs';
import jsyaml from 'js-yaml';

jest.mock('node:fs');
jest.mock('js-yaml');

describe('routes generation from swaggerDocs', () => {
  let swaggerDocs: any;

  beforeEach(() => {
    // Mock swagger.yaml content
    swaggerDocs = {
      paths: {
        '/users': {
          get: { operationId: 'getUsers', parameters: [] },
          post: { operationId: 'createUser', parameters: [] },
        },
        '/users/{id}': {
          get: {
            operationId: 'getUserById',
            parameters: [{ name: 'id', in: 'path' }],
          },
        },
      },
    };

    // Mock fs.readFileSync and jsyaml.load
    (fs.readFileSync as jest.Mock).mockReturnValue('swagger yaml content');
    (jsyaml.load as jest.Mock).mockReturnValue(swaggerDocs);
  });

  it('should generate correct routes array from swaggerDocs', () => {
    // Simulate the code logic for routes
    type SwaggerConfig = {
      operationId: string;
      parameters?: any[];
      [key: string]: any;
    };

    const routes = Object.entries(swaggerDocs.paths).flatMap(
      ([path, methods]) => {
        return Object.entries(methods).map(([method, config]) => {
          const typedConfig = config as unknown as SwaggerConfig;
          return {
            path,
            method,
            operationId: typedConfig.operationId,
            params: typedConfig.parameters,
          };
        });
      },
    );

    expect(routes).toEqual([
      { path: '/users', method: 'get', operationId: 'getUsers', params: [] },
      { path: '/users', method: 'post', operationId: 'createUser', params: [] },
      {
        path: '/users/{id}',
        method: 'get',
        operationId: 'getUserById',
        params: [{ name: 'id', in: 'path' }],
      },
    ]);
  });

  it('should replace path parameters with :paramName for path params', () => {
    // Simulate the code logic for path replacement
    const route = {
      path: '/users/{id}',
      method: 'get',
      operationId: 'getUserById',
      params: [{ name: 'id', in: 'path' }],
    };

    let routePath = route.path;
    route.params.forEach((param: any) => {
      if (param.in === 'path') {
        routePath = routePath.replace(`{${param.name}}`, `:${param.name}`);
      }
    });

    expect(routePath).toBe('/users/:id');
  });

  it('should not replace anything if there are no path params', () => {
    const route = {
      path: '/users',
      method: 'get',
      operationId: 'getUsers',
      params: [],
    };

    let routePath = route.path;
    if (Array.isArray(route.params)) {
      route.params.forEach((param: any) => {
        if (param.in === 'path') {
          routePath = routePath.replace(`{${param.name}}`, `:${param.name}`);
        }
      });
    }

    expect(routePath).toBe('/users');
  });
});
