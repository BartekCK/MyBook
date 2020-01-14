import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { RentModule } from './rent/rent.module';
import { APP_GUARD } from '@nestjs/core';
import { PermitGuard } from './auth/permits/PermitGuard';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [BooksModule, MongooseModule.forRoot('mongodb://localhost:27017/admin'), AuthModule, UsersModule, RentModule],
  controllers: [AppController],
  providers: [{
    provide: APP_GUARD,
    useClass: PermitGuard,
  }],
})
export class AppModule {}
