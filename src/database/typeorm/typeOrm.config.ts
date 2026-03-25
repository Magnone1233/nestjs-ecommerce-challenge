import { config } from 'dotenv';
import { resolve } from 'path';
import { getEnvPath } from '../../common/helper/env.helper';
import { DataSourceOptions } from 'typeorm';

const envFilePath: string = getEnvPath(
  resolve(__dirname, '../..', 'common/envs'),
);
config({ path: envFilePath });

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',

  url: process.env.DATABASE_URL,

  entities: ['dist/**/*.entity.js'],

  migrations: ['dist/database/migration/history/*.js'],

  logger: 'simple-console',
  logging: true,

  synchronize: true,
};
