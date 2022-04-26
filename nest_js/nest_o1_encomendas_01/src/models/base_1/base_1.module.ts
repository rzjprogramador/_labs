import { Module } from '@nestjs/common';
import { Base1Service } from './base_1.service';

@Module({
  providers: [Base1Service],
})
export class Base1Module {}
