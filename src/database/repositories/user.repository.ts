import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  private users = [];

  async save(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }

  async list(): Promise<any> {
    return await this.userRepository.find();
  }

  async searchByEmail(email: string): Promise<any> {
    return this.userRepository.findOne({ where: { email } });
  }

  async searchByDocument(document: string): Promise<any> {
    return await this.userRepository.findOne({ where: { document } });
  }
}
