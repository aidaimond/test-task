import { Controller, Post, Req } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { User, UserDocument } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  @Post()
  registerUser(@Req() req: Request) {
    const user = new this.userModel({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      surname: req.body.surname,
      age: req.body.age,
    });

    user.generateToken();

    return user.save();
  }
}
