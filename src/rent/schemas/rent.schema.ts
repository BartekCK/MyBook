import * as mongoose from 'mongoose';

export const RentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  book: {
      type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
  expiration: {
    type: Date,
    require: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
  },
});
