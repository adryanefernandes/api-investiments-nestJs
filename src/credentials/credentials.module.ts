import { Module } from '@nestjs/common';
import { CredentialsController } from './credentials.controller';
import { CellphoneValidator } from './validations/cellphone.validator';
import { DocumentValidator } from './validations/document.validator';

@Module({
  controllers: [CredentialsController],
  providers: [DocumentValidator, CellphoneValidator],
})
export class CredentialsModule {}
