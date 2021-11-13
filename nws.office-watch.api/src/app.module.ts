import { CountryResolver } from './resolvers/country.resolver';
import { AddressResolver } from './resolvers/address.resolver';
import { CountryService } from 'src/services/country.service';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OfficeSpaceResolver } from './resolvers/office-space.resolver';
import { OfficeResolver } from './resolvers/office.resolver';
import { ReservationResolver } from './resolvers/reservation.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { AddressService } from './services/address.service';
import { OfficeSpaceService } from './services/office-space.service';
import { OfficeService } from './services/office.service';
import { ReservationService } from './services/reservation.service';
import { UserService } from './services/user.service';

@Module({
  imports: [
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

    AddressService,
    CountryService,
    OfficeService,
    OfficeSpaceService,
    UserService,
    ReservationService,

    AddressResolver,
    CountryResolver,
    OfficeResolver,
    OfficeSpaceResolver,
    ReservationResolver,
    UserResolver,
  ],
})
export class AppModule {}
