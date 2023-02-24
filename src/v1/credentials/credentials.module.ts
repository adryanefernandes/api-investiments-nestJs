import { Module } from '@nestjs/common';
import { UserRepository } from '../../database/repositories/user.repository';
import { CredentialsController } from './credentials.controller';
import { IsSingleDocumentValidator } from './validations/isSingleDocument.validator';
import { IsSingleEmailValidator } from './validations/isSingleEmail.validator';

@Module({
  controllers: [CredentialsController],
  providers: [
    IsSingleEmailValidator,
    IsSingleDocumentValidator,
    UserRepository,
  ],
})
export class CredentialsModule {}
