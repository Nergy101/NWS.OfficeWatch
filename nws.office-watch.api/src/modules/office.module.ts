import { AddressModule } from './address.module';
import { Module } from '@nestjs/common';
import { OfficeService } from 'src/resolvers/office/office.service';
import { OfficeResolver } from './../resolvers/office/office.resolver';
import { OfficeSpaceService } from 'src/resolvers/office-space/office-space.service';
import { OfficeSpaceResolver } from './../resolvers/office-space/office-space.resolver';
import { ReservationService } from 'src/resolvers/reservation/reservation.service';
import { ReservationResolver } from './../resolvers/reservation/reservation.resolver';
import { UserService } from 'src/resolvers/user/user.service';

@Module({
  imports: [AddressModule],
  providers: [UserService, OfficeService, OfficeSpaceService, ReservationService, OfficeResolver, OfficeSpaceResolver, ReservationResolver],
  exports: [OfficeService, OfficeSpaceService, ReservationService, OfficeResolver, OfficeSpaceResolver, ReservationResolver],
})
export class OfficeModule {}