import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';

@Module({
  exports: [UserRepository],
})
export class DatabaseModule {}
