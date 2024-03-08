import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public name: string = '';
  getHello(): string {
    return 'Hello World!1';
  }
}
