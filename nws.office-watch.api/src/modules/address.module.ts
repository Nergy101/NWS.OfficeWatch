import { CountryResolver } from './../resolvers/country/country.resolver';
import { AddressResolver } from './../resolvers/address/address.resolver';
import { Module } from '@nestjs/common';
import { AddressService } from 'src/resolvers/address/address.service';
import { CountryService } from 'src/resolvers/country/country.service';

@Module({
  providers: [AddressService, CountryService, AddressResolver, CountryResolver],
  exports: [AddressService, CountryService, AddressResolver, CountryResolver],
})
export class AddressModule {}
