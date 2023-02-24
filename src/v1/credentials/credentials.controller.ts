import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from 'src/database/repositories/user.repository';
import { SignupDTO } from './dto/signup.dto';

@Controller('credentials')
export class CredentialsController {
  constructor(private userRepository: UserRepository) {}

  @Post('signup')
  async signup(@Body() data: SignupDTO) {
    this.userRepository.save(data);
    return data;
  }

  @Get()
  async list() {
    return this.userRepository.list();
  }
}
