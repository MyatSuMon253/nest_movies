import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nestjs!';
  }
  getHi(): string {
    return 'Hi Nest';
  }
}