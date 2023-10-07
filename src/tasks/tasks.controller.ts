// src/tasks/tasks.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('tasks')
export class TasksController {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  @Post('create')
  async create(@Body() taskData: Task): Promise<Task> {
    const task = this.taskRepository.create(taskData);
    return await this.taskRepository.save(task);
  }
}
