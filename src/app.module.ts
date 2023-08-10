import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/user.schema';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/local.strategy';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test-task'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, AuthService, LocalStrategy],
})
export class AppModule {}
