import { Injectable } from '@nestjs/common';
import { Cat, CatDocument } from './schemas/cat.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {

  public constructor(
    // @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    // private readonly todoMapper: TodoMapperService
    @InjectModel(Cat.name) private model: Model<CatDocument>,
  ) {}
  async getHello(): Promise<string> {
    await this.model.create({   
      name: "Gerrila",
      age: 3,
      breed: "toston" 
    });
    return 'Hello World!';
  }

  getHello2(): string{
    return 'Hello World farhin';
  }
}
