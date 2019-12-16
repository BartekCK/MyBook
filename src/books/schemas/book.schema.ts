import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    id: String,
    title: String,
    author: [String],
    price: Number,
    pagesNumber: Number,
    releaseDate: Date,
    index: Number,
});
