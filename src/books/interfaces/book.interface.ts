import { ApiProperty } from '@nestjs/swagger';

export interface Book {
    id: string;
    title: string;
    author: string[];
    price: number;
    pagesNumber?: number;
    releaseDate?: Date;
    index?: number;
}
