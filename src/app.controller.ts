import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('farhin')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('/taif')
  getHello2(): string {
    return this.appService.getHello2();
  }
}

// localhost:3000/farhin/
// 127.0.0.1:3000/farhin/
// // src -> entities, controllers, services, module.fil, 