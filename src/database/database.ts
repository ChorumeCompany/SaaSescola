import { configDotenv } from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

configDotenv();

const databaseUrl = process.env.DATABASE_URL;

export const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  },
  models: [

  ],
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 100000,
  },
})

export const connectDB: () => Promise<void> = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.info('Connected to Database');
  } catch (e) {
   console.error(e);
  }
}