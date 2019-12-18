import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from '../books/books.service';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }
  @Post()
  creteUser(@Body() userDto: UserDto) {
    return this.usersService.create(userDto);
  }

}
