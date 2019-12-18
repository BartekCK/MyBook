import { CreateBookDto } from './dto/book.dto';
import { Book } from './interfaces/book.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {

    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

    async create(createBookDto: CreateBookDto): Promise<Book> {
        const createdBook = new this.bookModel(createBookDto);
        return await createdBook.save();
    }

    async findOne(id: string): Promise<Book> {
        return await this.bookModel.findOne({_id: id});
    }

    async findAll(): Promise<Book[]> {
        return await this.bookModel.find();
    }

    async deleteOne(id: string): Promise<Book> {
        return await this.bookModel.deleteOne({_id: id});
    }
    async updateOne(id: string, createBookDto: CreateBookDto): Promise<Book>{
        return await this.bookModel.updateOne({_id: id}, createBookDto);
    }
}
