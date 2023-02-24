import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from 'src/database/entities/user.entity';
import { UserRepository } from '../../database/repositories/user.repository';
import { SignupDTO } from './dto/signup.dto';

@Controller('credentials')
export class CredentialsController {
  constructor(private userRepository: UserRepository) {}

  @Post('signup')
  async signup(@Body() data: SignupDTO) {
    const userEntity = new UserEntity();
    userEntity.name = data.name;
    userEntity.lastName = data.last_name;
    userEntity.document = data.document;
    userEntity.email = data.email;
    userEntity.cellphone = data.cellphone;
    userEntity.tellphone = data.tellphone;
    // userEntity.password = data.password;

    await this.userRepository.save(userEntity);
    return data;
  }

  @Get()
  async list() {
    return this.userRepository.list();
  }
}
