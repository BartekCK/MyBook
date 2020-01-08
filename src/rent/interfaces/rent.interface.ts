import { Book } from '../../books/interfaces/book.interface';
import { User } from '../../users/interfaces/user.interface';

export interface Rent {
  id?: string;
  user: User;
  book: Book;
  create: Date;
  expiration: Date;
}
