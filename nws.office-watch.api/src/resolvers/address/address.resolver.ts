import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { Address } from 'src/model/address/address.model';
import { Country } from 'src/model/country/country.model';
import { CountryService } from 'src/resolvers/country/country.service';
import { AddressService } from './address.service';

@Resolver(() => Address)
export class AddressResolver {
  constructor(
    private addressService: AddressService,
    private countryService: CountryService,
  ) {}

  @Query(() => Address)
  async address(@Args('addressId', { type: () => ID }) addressId: ObjectId) {
    return this.addressService.getById(addressId);
  }

  @ResolveField(() => Country, { description: 'User that created the Address' })
  async country(@Parent() address: Address) {
    return this.countryService.getById(address.countryId);
  }
}
