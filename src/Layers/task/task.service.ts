import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task_Status } from './types/task.type';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  findAll(status: Task_Status) {
    if (status) {
      return this.taskRepository.find({
        where: {
          status,
        },
      });
    }
    return this.taskRepository.find();
  }

  findOne(taskId: number) {
    return this.taskRepository.findOne({
      where: {
        taskId,
      },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.taskRepository.update(id, updateTaskDto);
    return await this.findOne(id);
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
