import { Module } from '@nestjs/common';
import { CredentialsModule } from './v1/credentials/credentials.module';
import {
  CellphoneValidator,
  DocumentValidator,
  PasswordValidator,
  TellphoneValidator,
  MatchValidator,
} from './validations';

@Module({
  imports: [CredentialsModule],
  providers: [
    DocumentValidator,
    CellphoneValidator,
    PasswordValidator,
    TellphoneValidator,
    MatchValidator,
  ],
})
export class AppModule {}
