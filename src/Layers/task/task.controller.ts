import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ENDPOINT_TASK } from './endpoint';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Task_Status } from './types/task.type';

@Controller(ENDPOINT_TASK.CHILDREN)
@ApiTags('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @ApiQuery({ name: 'id', required: false })
  @ApiQuery({ name: 'status', required: false })
  findAll(@Query('id') id: string, @Query('status') status: Task_Status) {
    if (+id) return this.taskService.findOne(+id);

    return this.taskService.findAll(status);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
