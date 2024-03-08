import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import ModuleGroups from './Modules';
import connectDatabase from './Configs/connect';
import { LoggerMiddleware } from './Middleware';

@Module({
  imports: [ConfigModule.forRoot({}), connectDatabase(), ...ModuleGroups],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }

  onModuleInit() {
    console.log('onModuleInit');
  }
}
