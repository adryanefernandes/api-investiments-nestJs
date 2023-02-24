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
    return this.users;
  }

  async searchByEmail(email: string): Promise<any> {
    const user = this.users.find((u) => u.email === email);
    return user;
  }

  async searchByDocument(document: string): Promise<any> {
    const user = this.users.find((u) => u.document === document);
    return user;
  }
}
