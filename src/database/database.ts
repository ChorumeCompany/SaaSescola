import { configDotenv } from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Users } from '../Model/User.Model';
import { School } from '../Model/School.Model';
import { Profissionais } from '../Model/Profissionais.Model';

// Load environment variables
configDotenv({ path: '.env' });

// Obtenha a URL de conexão do ambiente
const dbUrl = process.env.DATABASE_URL || '';

// Solução mais robusta para parsing da URL
let dbConfig;
if (dbUrl.startsWith('postgresql://') || dbUrl.startsWith('postgres://')) {
  // Remove o prefixo e divide a URL
  const cleanUrl = dbUrl.replace(/^postgres(ql)?:\/\//, '');
  const [auth, rest] = cleanUrl.split('@');
  const [username, password] = auth.split(':');
  if (!rest) {
    throw new Error(
      'Invalid database URL format: missing host and database information.',
    );
  }
  const [hostPort, database] = rest.split('/');
  const [host, port] = hostPort.split(':');

  dbConfig = {
    database,
    username,
    password,
    host,
    port: port ? parseInt(port) : 5432, // Porta padrão 5432 se não especificada
    dialect: 'postgres' as const,
    dialectOptions: {
      ssl: false, // Altere para true em produção com certificados válidos
    },
    models: [Users, School, Profissionais],
    logging: false,
  };
} else {
  // Formato alternativo caso não seja uma URL completa
  dbConfig = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: 'postgres' as const,
    dialectOptions: {
      ssl: false,
    },
    models: [Users, School, Profissionais],
    logging: false,
  };
}

// Inicialize o Sequelize
export const sequelize = new Sequelize(dbConfig);

// Teste de conexão
export const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.info('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};
