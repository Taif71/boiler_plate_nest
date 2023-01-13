import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/schemas/todo.entities';


@Module({
  imports: [
    TypeOrmModule.forFeature([Todo])
  ],
  providers: [],
  controllers: []
})
export class TodoModule {}