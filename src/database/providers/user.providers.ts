import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

// TODO - mudar para constants
export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];
