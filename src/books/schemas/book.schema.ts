import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true,
    },
    author: [{
        type: String,
        require: true,
    }],
    price: {
        type: Number,
        require: true,
        min: 1,
    },
    pagesNumber: {
        type: Number,
    },
    releaseDate: Date,
    index: {
        type: Number,
        unique: true,
    },
});
