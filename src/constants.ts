import { Sequelize } from 'sequelize-typescript';
import express, { Express } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const sequelize: Sequelize = new Sequelize(
  'movies',
  'root',
  '12345678',
  {
    dialect: 'mysql',
    host: 'localhost',
    models: [__dirname + '/models'],
  }
);
export const app: Express = express();
export const port: number = 3000;
