import 'reflect-metadata';
import type { NextFunction, Request, Response, Application } from 'express';
import express from 'express';
import cors from 'cors';
import { connectDB } from './database/database';
import * as http from 'node:http';
import * as path from 'node:path';
import * as fs from 'node:fs';
import jsyaml from 'js-yaml';
import swaggerUi from 'swagger-ui-express';
import { controllers } from './routes/routes';
import { authenticateToken } from './utils/authMiddleware';
import { app } from './app';

const port: string | 3000 = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());

//Carregar o Swagger YAML
const specPath: string = path.join(__dirname, 'api/swagger.yaml');
const spec: string = fs.readFileSync(specPath, 'utf8');
const swaggerDocs = jsyaml.load(spec) as { paths: { [key: string]: string } };

//configurar o SwaggerUi
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//midleware do cors
app.use((req: Request, res: Response, next: NextFunction): void => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.header(
    'Access-Control-Allow-Methods',
    'PUT, POST, PATCH, DELETE, GET, OPTIONS',
  );
  next();
});
//Configuração do Bearer token
app.use((req: Request, res: Response, next: NextFunction): void => {
  if (req.path.startsWith('/docs') || req.path === '/authentication') {
    return next();
  } else {
    authenticateToken(req, res, next);
  }
});

// configuração das rotas
type SwaggerConfig = {
  operationId: string;
  [key: string]: string;
};

const routes = Object.entries(swaggerDocs.paths).flatMap(([path, methods]) => {
  return Object.entries(methods).map(([method, config]) => {
    const typedConfig = config as unknown as SwaggerConfig;
    return {
      path,
      method,
      operationId: typedConfig.operationId,
      params: typedConfig.parameters,
    };
  });
});

routes.forEach(({ path, method, operationId, params }): void => {
  let handler;
  handler = controllers[operationId as keyof typeof controllers];
  if (handler) {
    if (
      Array.isArray(params) &&
      params.some((param): boolean => param.in === 'path')
    ) {
      params.forEach((param): void => {
        if (param.in === 'path') {
          const correctedPath = path.replace(
            `{${param.name}}`,
            `:${param.name}`,
          );
        }
      });
    } else {
      app[method as keyof Application](path, handler);
    }
  } else {
    console.error(`Controller não encontrado para operationId: ${operationId}`);
  }
});

connectDB().then((): void => {});

http.createServer(app).listen(port, (): void => {
  console.info(`🚀 Server is running on http://localhost:${port}`);
  console.info(`🚀 Swagger is available on http://localhost:${port}/docs`);
});
