import { UserModule } from './modules/user.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OfficeModule } from './modules/office.module';
import { AddressModule } from './modules/address.module';
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
import { AddressResolver } from './resolvers/address/address.resolver';
import { CountryResolver } from './resolvers/country/country.resolver';
import { OfficeSpaceResolver } from './resolvers/office-space/office-space.resolver';
import { OfficeResolver } from './resolvers/office/office.resolver';
import { ReservationResolver } from './resolvers/reservation/reservation.resolver';
import { UserResolver } from './resolvers/user/user.resolver';
import { AddressService } from './resolvers/address/address.service';
import { CountryService } from './resolvers/country/country.service';
import { OfficeService } from './resolvers/office/office.service';
import { UserService } from './resolvers/user/user.service';
import { ReservationService } from './resolvers/reservation/reservation.service';
import { OfficeSpaceService } from './resolvers/office-space/office-space.service';
import { AppSettings } from 'src/keys/appsettings';
@Module({
  imports: [
    // AddressModule,
    // OfficeModule,
    // UserModule,
    MongooseModule.forRoot(AppSettings.mongoUriDev),
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
