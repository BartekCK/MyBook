import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [BooksModule, MongooseModule.forRoot('mongodb://localhost:27017/admin'), AuthModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}
