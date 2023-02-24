import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

console.log(`${__dirname}/**/migrations/*.{ts,js}`);

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'investiments',
  entities: [User],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  migrationsTableName: 'Migrations',
});
