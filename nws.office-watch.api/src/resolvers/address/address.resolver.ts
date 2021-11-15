import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
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
  async address(@Args('addressId', { type: () => ID }) addressId: string) {
    return this.addressService.findOneById(addressId);
  }

  @ResolveField(() => Country, { description: 'User that created the Address' })
  async country(@Parent() address: Address) {
    return this.countryService.findOneById(address.countryId);
  }
}
