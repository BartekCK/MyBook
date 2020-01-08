import { CreateBookDto } from './dto/createBook.dto';
import { Book } from './interfaces/book.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateGetBookDto } from './dto/updateGetBook.dto';

@Injectable()
export class BooksService {

    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

    async create(createBookDto: CreateBookDto): Promise<Book> {
        try {
            const createdBook = new this.bookModel(createBookDto);
            return createdBook.save();
        } catch (e) {
            return e;
        }
    }

    async findOne(id: string): Promise<Book> {
        let book: Book;
        book = await this.bookModel.findOne({_id: id});
        if (!book) {
            throw new NotFoundException(`Book with id ${id} not found`);
        }
        return book;
    }

    async findAll(): Promise<Book[]> {
        return await this.bookModel.find();
    }

    async deleteOne(id: string): Promise<Book> {
        try {
            const book: Book = await this.findOne(id);
        } catch (e) {
            throw e;
        }
        return await this.bookModel.deleteOne({_id: id});
    }
    async updateOne(id: string, updateBookDto: UpdateGetBookDto): Promise<Book> {
        try {
            const book: Book = await this.findOne(id);
        } catch (e) {
            throw e;
        }
        return await this.bookModel.updateOne({_id: id}, updateBookDto);
    }
}
