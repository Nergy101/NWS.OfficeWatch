import { OfficeModule } from './office.module';
import { UserResolver } from './../resolvers/user/user.resolver';
import { Module } from '@nestjs/common';
import { UserService } from 'src/resolvers/user/user.service';

@Module({
  imports: [OfficeModule],
  providers: [UserService, UserResolver],
  exports: [UserService, UserResolver],
})
export class UserModule {}
