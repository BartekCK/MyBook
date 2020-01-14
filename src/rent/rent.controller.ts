import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { Rent } from './interfaces/rent.interface';
import { RentService } from './rent.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateRentTime } from './dto/updateRentTime.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiTags('rent')
@Controller('users')
export class RentController {
  constructor(private readonly rentService: RentService) {}

  @Post('/books/:bookId')
  rentBook(@Request() req, @Param('bookId') bookId: string): Promise<Rent> {
    return this.rentService.rentBook(req.user, bookId);
  }

  @Get('books')
  getAllUserBooks(@Request() req): Promise<Rent []> {
    return this.rentService.getAllUserBooks(req.user);
  }

  @Get('books/:id')
  getRentBook(@Request() req, @Param('id') bookId: string): Promise<Rent> {
    return this.rentService.getRentBook(req.user, bookId);
  }

  @Put('books/:id')
  rentUpdate(@Request() req, @Param('id') id: string, @Body() updateRentTime: UpdateRentTime): Promise<Rent> {
    return this.rentService.rentUpdate(req.user, id, updateRentTime.expiration);
  }

  @Delete('books/:id')
  rentDelete(@Request() req, @Param('id') idBook: string): Promise<Rent> {
    return this.rentService.deleteRent(req.user, idBook);
  }
}
