import { Body, Controller, Post } from '@nestjs/common';
import { SignupDTO } from './dto/signup.dto';

@Controller('credentials')
export class CredentialsController {
  @Post('signup')
  async signup(@Body() data: SignupDTO) {
    return data;
  }
}
