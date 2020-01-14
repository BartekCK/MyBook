import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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
   async rentBook( user: User, bookId: string): Promise<Rent> {
    const book: Book = await this.booksService.findOne(bookId);
    const date: Date = new Date(Date.now());
    date.setMonth(date.getMonth() + 1);

    if (await this.isRent(bookId)) {
        throw new HttpException({
          status: HttpStatus.NO_CONTENT,
          error: 'This book was rented',
        }, 204);
      }
    const rentModel = new this.rentRepository({user: user.userId, book, expiration: date});
    return rentModel.save();

  }

  async getAllUserBooks(user: User): Promise<Rent []> {
    const rents: Rent[] = await this.rentRepository.find({user: user.userId});
    if (!rents) {
      throw new NotFoundException(`User don't have any rented books`);
    }
    return rents;
  }

  async getRentBook(user: User, bookId: string): Promise<Rent> {
    const rent: Rent = await this.rentRepository.findOne({user: user.userId, book: bookId});
    if (!rent) {
      throw new NotFoundException(`User didn't rent book with id ${bookId}`);
    }
    return rent;
  }

  async rentUpdate(user: User, bookId: string, expiration: Date): Promise<Rent> {
    const rent: Rent = await this.getRentBook(user, bookId);
    if (expiration.valueOf() < Date.now()) {
      throw new HttpException({status: HttpStatus.BAD_REQUEST}, 400);
    }
    return await this.rentRepository.updateOne({_id: rent.id}, expiration);
  }

  async deleteRent(user: User, bookId: string) {
    const rent: Rent = await this.getRentBook(user, bookId);
    return this.rentRepository.deleteOne({_id: rent.id});
  }

   async isRent(bookId: string): Promise<boolean> {
    const rent: Rent = await this.rentRepository.findOne({book: bookId});
    return !!rent;
  }
}
