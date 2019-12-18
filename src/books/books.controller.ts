import { Controller, Post, Get, Body, Param, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/book.dto';
import { Book } from './interfaces/book.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {
    }

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

    @Delete(':id')
    deleteOne(@Param('id')id: string): Promise<Book> {
         return this.booksService.deleteOne(id);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() createBookDto: CreateBookDto): Promise<Book>{
        return this.booksService.updateOne(id, createBookDto);
    }
}
