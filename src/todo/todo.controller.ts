import {
  Controller,
  Get,
  Post,
  Body,
  Logger,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '../../dist/todo.interface.d';

@Controller('todo')
export class TodoController {
  private readonly logger = new Logger(TodoController.name);

  constructor(private readonly todoService: TodoService) { }

  @Get(':id')
  fineOne(@Param('id', ParseIntPipe) id: number): Todo {
    this.logger.log('Handling findOne() request with id = ' + id + '...');

    return this.todoService.findOne(id);
  }

  @Post()
  create(@Body() todo): void {
    this.logger.log('Handling create() request...');
    return this.todoService.create(todo);
  }

  @Get()
  findAll(): Todo[] {
    this.logger.log('Handling findAll() request...');

    return this.todoService.getAll();
  }
}
