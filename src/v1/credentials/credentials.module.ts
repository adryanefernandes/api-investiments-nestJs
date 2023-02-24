import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CredentialsController } from './credentials.controller';
import { IsSingleDocumentValidator } from './validations/isSingleDocument.validator';
import { IsSingleEmailValidator } from './validations/isSingleEmail.validator';

@Module({
  imports: [DatabaseModule],
  controllers: [CredentialsController],
  providers: [IsSingleEmailValidator, IsSingleDocumentValidator],
})
export class CredentialsModule {}
