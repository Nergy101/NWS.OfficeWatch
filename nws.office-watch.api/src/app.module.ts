import { UserModule } from './modules/user.module';
import { CountryResolver } from './resolvers/country/country.resolver';
import { CountryService } from 'src/resolvers/country/country.service';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OfficeSpaceResolver } from './resolvers/office-space/office-space.resolver';
import { OfficeResolver } from './resolvers/office/office.resolver';
import { ReservationResolver } from './resolvers/reservation/reservation.resolver';
import { UserResolver } from './resolvers/user/user.resolver';
import { OfficeSpaceService } from './resolvers/office-space/office-space.service';
import { OfficeService } from './resolvers/office/office.service';
import { ReservationService } from './resolvers/reservation/reservation.service';
import { UserService } from './resolvers/user/user.service';
import { AddressService } from './resolvers/address/address.service';
import { AddressResolver } from './resolvers/address/address.resolver';
import { OfficeModule } from './modules/office.module';
import { AddressModule } from './modules/address.module';

@Module({
  imports: [
    AddressModule,
    OfficeModule,
    UserModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,

    // AddressModule,

    // AddressService,
    // CountryService,
    // OfficeService,
    // OfficeSpaceService,
    // UserService,
    // ReservationService,

    // AddressResolver,
    // CountryResolver,
    // OfficeResolver,
    // OfficeSpaceResolver,
    // ReservationResolver,
    // UserResolver,
  ],
})
export class AppModule {}
