import { OfficeModule } from './office.module';
import { Module } from '@nestjs/common';
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
