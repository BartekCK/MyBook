import { Module } from '@nestjs/common';
import { RentSchema } from './schemas/rent.schema';
import { RentController } from './rent.controller';
import { RentService } from './rent.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { BooksModule } from '../books/books.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Rent', schema: RentSchema}]), UsersModule, BooksModule],
  controllers: [RentController],
  providers: [RentService],
})
export class RentModule {}
