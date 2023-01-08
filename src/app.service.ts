import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Todo } from './entities/todo.entities';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  public constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    // private readonly todoMapper: TodoMapperService
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
