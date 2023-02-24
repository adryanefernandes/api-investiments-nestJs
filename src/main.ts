import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import { AppDataSource } from './database/dataSource';

const SERVER_PORT = process.env.SERVER_PORT || 3000;

async function bootstrap() {
  // Inicia conexão com o banco de dados
  await AppDataSource.initialize();

  const app = await NestFactory.create(AppModule);

  // To use validation pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(SERVER_PORT);
}
bootstrap();
