import { Module } from '@nestjs/common';
import { CredentialsModule } from './credentials/credentials.module';

@Module({
  imports: [CredentialsModule],
})
export class AppModule {}
