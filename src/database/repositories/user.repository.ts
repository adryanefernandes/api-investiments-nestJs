import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async save(user): Promise<any> {
    this.users.push(user);
  }

  async list(): Promise<any> {
    return this.users;
  }

  async searchByEmail(email: string): Promise<any> {
    const user = this.users.find((u) => u.email === email);
    return user;
  }
}
