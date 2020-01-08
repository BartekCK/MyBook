import { Controller, Get, Param, Post } from '@nestjs/common';
import { Rent } from './interfaces/rent.interface';
import { RentService } from './rent.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('rent')
@Controller('users')
export class RentController {
  constructor(private readonly rentService: RentService) {}

  @Post(':userId/books/:bookId')
  rentBook(@Param('userId') userId: string, @Param('bookId') bookId: string): Promise<Rent> {
    return this.rentService.rentBook(userId, bookId);
  }

}
