import { Controller, Get } from '@nestjs/common';
import { BarService } from './bar.service';

@Controller('bar')
export class BarController {
  constructor(private readonly service: BarService) {}

  @Get('check')
  async check(): Promise<string> {
    return this.service.check();
  }
}
