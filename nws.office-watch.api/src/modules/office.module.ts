import { AddressModule } from './address.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Office, OfficeSchema } from 'src/model/office/office.model';
import {
  OfficeSpace,
  OfficeSpaceSchema,
} from 'src/model/office-space/office-space.model';
import {
  Reservation,
  ReservationSchema,
} from 'src/model/reservation/reservation.model';

@Module({
  imports: [
    AddressModule,
    MongooseModule.forFeature([
      { name: Office.name, schema: OfficeSchema },
      { name: OfficeSpace.name, schema: OfficeSpaceSchema },
      { name: Reservation.name, schema: ReservationSchema },
    ]),
  ],
  // providers: [
  //   UserService,
  //   OfficeService,
  //   OfficeSpaceService,
  //   ReservationService,
  //   OfficeResolver,
  //   OfficeSpaceResolver,
  //   ReservationResolver,
  // ],
  // exports: [
  //   OfficeService,
  //   OfficeSpaceService,
  //   ReservationService,
  //   OfficeResolver,
  //   OfficeSpaceResolver,
  //   ReservationResolver,
  // ],
})
export class OfficeModule {}
