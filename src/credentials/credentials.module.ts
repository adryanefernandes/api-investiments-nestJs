import { Module } from '@nestjs/common';
import { UserRepository } from 'src/database/repositories/user.repository';
import { CredentialsController } from './credentials.controller';
import { IsSingleDocumentValidator } from './validations/isSingleDocument.validator';
import { IsSingleEmailValidator } from './validations/isSingleEmail.validator';

@Module({
  controllers: [CredentialsController],
  providers: [
    UserRepository,
    IsSingleEmailValidator,
    IsSingleDocumentValidator,
  ],
})
export class CredentialsModule {}
