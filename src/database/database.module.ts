import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { userProviders } from './providers/user.providers';
import { UserRepository } from './repositories/user.repository';

@Module({
  providers: [...databaseProviders, ...userProviders, UserRepository],
  exports: [...databaseProviders, UserRepository],
})
export class DatabaseModule {}
