import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class UpdateBookDto {
  @ApiProperty()
  readonly title?: string;

  @ApiProperty({type: [String]})
  readonly author?: string[];

  @ApiProperty()
  readonly price?: number;

  @ApiProperty()
  readonly pagesNumber?: number;

  @ApiProperty({type: String, pattern: 'YYYY-MM-DD'})
  readonly releaseDate?: Date;

  @ApiProperty()
  readonly index?: number;
}
