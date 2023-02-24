import path from 'path';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'investiments',
  entities: [`${__dirname}/../../**/**.entity{.ts,.js}`],
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'Migrations',
});
