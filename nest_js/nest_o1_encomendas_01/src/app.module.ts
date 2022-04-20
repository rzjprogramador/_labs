import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EncomendaTest1Module } from './encomenda_test1/encomenda_test1.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env_exemplo1'],
    }),
    EncomendaTest1Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
