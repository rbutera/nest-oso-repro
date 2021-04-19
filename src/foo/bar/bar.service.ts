import { Injectable } from '@nestjs/common';
import { OsoService } from 'nestjs-oso';

@Injectable()
export class BarService {
  constructor(private readonly oso: OsoService) {}
  async check(): Promise<string> {
    const result = this.oso.isAllowed('foo', 'bar', 'baz');
    return `The result is ${result}`;
  }
}
