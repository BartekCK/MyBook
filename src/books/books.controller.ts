import { Controller, Post, Get, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/createBook.dto';
import { Book } from './interfaces/book.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UpdateGetBookDto } from './dto/updateGetBook.dto';

@ApiTags('books')
@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post()
    addBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
         return this.booksService.create(createBookDto);
    }

    @Get(':id')
    findOne(@Param('id')id: string): Promise<Book> {
        return this.booksService.findOne(id);
    }

    @Get()
    findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteOne(@Param('id')id: string): Promise<Book> {
         return this.booksService.deleteOne(id);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    update(@Param('id') id: string, @Body() updateBookDto: UpdateGetBookDto): Promise<Book> {
        return this.booksService.updateOne(id, updateBookDto);
    }
}
