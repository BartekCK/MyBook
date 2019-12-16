import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
    @ApiProperty()
    readonly title: string;
    @ApiProperty({type: [String]})
    readonly author: string[];
    @ApiProperty()
    readonly price: number;
    @ApiProperty()
    readonly pagesNumber: number;
    @ApiProperty()
    readonly releaseDate?: Date;
    @ApiProperty()
    readonly index?: number;
}
