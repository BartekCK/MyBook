import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(userDto: UserDto) {
    const createdUser = new this.userModel(userDto);
    return createdUser.save();
  }

  async findOne(user: string): Promise<User> {
    return await this.userModel.findOne({username: user});
  }

  async findOneById(userId: string): Promise<User> {
      const user: User = await this.userModel.findOne({_id: userId});
      if (!user) {
        throw new NotFoundException(`User with id ${userId} not found`);
      }
      return user;
  }
}
