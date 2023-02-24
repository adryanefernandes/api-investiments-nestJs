import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserRepository } from './repositories/user.repository';

@Module({
  exports: [UserRepository, DataSource],
})
export class DatabaseModule {}
