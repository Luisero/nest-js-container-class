import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Carregar variáveis de ambiente do arquivo .env
  

  const app = await NestFactory.create(AppModule);
  await app.listen(3000); 
}
bootstrap();
