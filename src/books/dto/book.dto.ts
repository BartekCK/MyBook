import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateBookDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @ApiProperty({type: [String]})
    @IsString({each: true})
    @IsNotEmpty()
    readonly author: string[];

    @ApiProperty()
    @Min(0)
    @Max(1000)
    readonly price: number;

    @ApiProperty()
    @IsInt()
    @Min(1)
    readonly pagesNumber: number;

    @ApiProperty({type: String, pattern: 'YYYY-MM-DD'})
    @IsString()
    readonly releaseDate?: Date;

    @ApiProperty()
    @IsInt()
    readonly index?: number;
}
