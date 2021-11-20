import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { CreateAddressInput } from 'src/model/address/address.inputs';
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

  
  @Mutation(() => Address, { description: 'Creates posted Address' })
  async createAddress(@Args('createdAddress') createdAddress: CreateAddressInput) {
    return this.addressService.create(createdAddress);
  }
}
