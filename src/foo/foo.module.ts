import { Module } from '@nestjs/common';
import { OsoModule } from 'nestjs-oso';
import { BarService } from './bar/bar.service';
import { BarController } from './bar/bar.controller';

@Module({
  imports: [
    OsoModule.forRoot({
      loadFile: 'src/**/*.polar',
    }),
  ],
  exports: [OsoModule],
  providers: [BarService],
  controllers: [BarController],
})
export class FooModule {}
