import { CountryResolver } from './../resolvers/country/country.resolver';
import { AddressResolver } from './../resolvers/address/address.resolver';
import { Module } from '@nestjs/common';
import { AddressService } from 'src/resolvers/address/address.service';
import { CountryService } from 'src/resolvers/country/country.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema } from 'src/model/address/address.model';
import { Country, CountrySchema } from 'src/model/country/country.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Address.name, schema: AddressSchema },
      { name: Country.name, schema: CountrySchema },
    ]),
  ],
  // providers: [AddressService, CountryService, AddressResolver, CountryResolver],
  // exports: [AddressService, CountryService, AddressResolver, CountryResolver],
})
export class AddressModule {}
