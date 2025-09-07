import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
  define: {
    timestamps: true,
    underscored: true
  }
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
    await sequelize.sync(); // { force: true } to recreate tables
  } catch (error) {
    console.error('Unable to connect to database:', error);
    process.exit(1);
  }
};