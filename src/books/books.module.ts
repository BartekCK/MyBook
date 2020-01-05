import { BookSchema } from './schemas/book.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Book', schema: BookSchema}]), AuthModule],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
