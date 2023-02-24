import { Module } from '@nestjs/common';
import { CredentialsModule } from './credentials/credentials.module';
import {
  CellphoneValidator,
  DocumentValidator,
  PasswordValidator,
  TellphoneValidator,
} from './validations';

@Module({
  imports: [CredentialsModule],
  providers: [
    DocumentValidator,
    CellphoneValidator,
    PasswordValidator,
    TellphoneValidator,
  ],
})
export class AppModule {}
