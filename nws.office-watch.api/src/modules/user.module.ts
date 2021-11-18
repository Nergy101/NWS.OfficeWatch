import { OfficeModule } from './office.module';
import { Module } from '@nestjs/common';
import { UserResolver } from './../resolvers/user/user.resolver';
import { UserService } from 'src/resolvers/user/user.service';
import { User, UserSchema } from 'src/model/user/user.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    OfficeModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  // providers: [UserService, UserResolver],
  // exports: [UserService, UserResolver],
})
export class UserModule {}
