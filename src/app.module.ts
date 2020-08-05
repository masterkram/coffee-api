import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { AuthModule } from './auth/auth.module';
import { CoffeeModule } from './coffee/coffee.module';
import { CoffeeMixModule } from './coffee-mix/coffee-mix.module';
import { VarietyModule } from './variety/variety.module';
import { RoastMethodModule } from './roast-method/roast-method.module';
import { BrewMethodModule } from './brew-method/brew-method.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ autoLoadEntities: true }),
    UserModule,
    AuthModule,
    CoffeeModule,
    CoffeeMixModule,
    VarietyModule,
    RoastMethodModule,
    BrewMethodModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
