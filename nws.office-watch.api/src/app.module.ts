import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema } from './model/address/address.model';
import { Country, CountrySchema } from './model/country/country.model';
import { Office, OfficeSchema } from './model/office/office.model';
import {
  OfficeSpace,
  OfficeSpaceSchema,
} from './model/office-space/office-space.model';
import {
  Reservation,
  ReservationSchema,
} from './model/reservation/reservation.model';
import { User, UserSchema } from './model/user/user.model';
import { AddressResolver } from './resolvers/address.resolver';
import { CountryResolver } from './resolvers/country.resolver';
import { OfficeSpaceResolver } from './resolvers/office-space.resolver';
import { OfficeResolver } from './resolvers/office.resolver';
import { ReservationResolver } from './resolvers/reservation.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { AddressService } from './services/repositories/address.service';
import { CountryService } from './services/repositories/country.service';
import { OfficeService } from './services/repositories/office.service';
import { UserService } from './services/repositories/user.service';
import { OfficeSpaceService } from './services/repositories/office-space.service';
import { ReservationService } from './services/repositories/reservation.service';
import { DateRangeService } from './services/shared/daterange-service';
@Module({
  imports: [
    // AddressModule,
    // OfficeModule,
    // UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://nergy101:test123@cluster0.7kjhf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: Address.name, schema: AddressSchema },
      { name: Country.name, schema: CountrySchema },
      { name: Office.name, schema: OfficeSchema },
      { name: OfficeSpace.name, schema: OfficeSpaceSchema },
      { name: Reservation.name, schema: ReservationSchema },
      { name: User.name, schema: UserSchema },
    ]),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      sortSchema: true,
      debug: true,
    }),
  ],
  // controllers: [AppController],
  providers: [
    AddressService,
    CountryService,
    OfficeService,
    OfficeSpaceService,
    ReservationService,
    DateRangeService,
    UserService,
    AddressResolver,
    CountryResolver,
    OfficeResolver,
    OfficeSpaceResolver,
    ReservationResolver,
    UserResolver,
  ],
})
export class AppModule {}
