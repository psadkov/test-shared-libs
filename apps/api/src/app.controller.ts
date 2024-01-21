import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { sharedLog } from '@shared/logs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    sharedLog('getHello');
    return this.appService.getHello();
  }
}
