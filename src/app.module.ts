// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';
import { TasksController } from './tasks/tasks.controller';
import * as dotenv from 'dotenv';
dotenv.config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres', // Endereço do seu servidor PostgreSQL
      port: 5432, // Porta padrão do PostgreSQL
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Task],
      synchronize: true, // Isso cria as tabelas automaticamente (apenas para desenvolvimento)
    }),
    TypeOrmModule.forFeature([Task])
  ],
  controllers: [TasksController],
})
export class AppModule {}
