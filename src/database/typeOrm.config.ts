import { DataSource } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { default1677265819491 } from './migrations/1677265819491-default';

export default new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'investiments',
  entities: [UserEntity], //TODO - resolver isso aqui
  migrations: [default1677265819491],
  migrationsTableName: 'Migrations',
});
