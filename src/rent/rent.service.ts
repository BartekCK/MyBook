import { Injectable } from '@nestjs/common';
import { UpdateGetBookDto } from '../books/dto/updateGetBook.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rent } from './interfaces/rent.interface';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { BooksService } from '../books/books.service';
import { Book } from '../books/interfaces/book.interface';
import { User } from '../users/interfaces/user.interface';

@Injectable()
export class RentService {
  constructor(
    @InjectModel('Rent') private readonly rentRepository: Model<Rent>,
    private readonly usersService: UsersService,
    private readonly booksService: BooksService) {
  }
   async rentBook( userId: string, bookId: string): Promise<Rent> {
    const book: Book = await this.booksService.findOne(bookId);
    const user: User = await this.usersService.findOneBtId(userId);
    const date: Date = new Date(Date.now());
    date.setMonth(date.getMonth() + 1);
    try {
      const rentModel = new this.rentRepository({user, book, expiration: date});
      return rentModel.save();
    } catch (e) {
      return e;
    }
  }
}
