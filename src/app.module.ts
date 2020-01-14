import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { RentModule } from './rent/rent.module';

@Module({
  imports: [BooksModule, MongooseModule.forRoot('mongodb://localhost:27017/admin'), AuthModule, UsersModule, RentModule],
  controllers: [AppController],
})
export class AppModule {}
