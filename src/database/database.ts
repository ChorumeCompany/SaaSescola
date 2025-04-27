import { configDotenv } from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Users } from '../Model/User.Model';
import { School } from '../Model/School.Model';
import { Profissionais } from '../Model/Profissionais.Model';

// Load environment variables
configDotenv({ path: '.env' }); // Explicit path

// Clean the DATABASE_URL by removing any 'DATABASE_URL=' prefix
const rawDbUrl = process.env.DATABASE_URL || '';
const databaseUrl = rawDbUrl.replace(/^DATABASE_URL=/, '').trim();

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined in your .env file');
}

// Initialize Sequelize
export const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres', // Explicitly set for Supabase
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  models: [Users, School, Profissionais],
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 100000,
  },
});

// Test connection
export const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.info('Connected to Supabase PostgreSQL');
  } catch (error) {
    console.error('Supabase connection error:', error);
    process.exit(1);
  }
};
