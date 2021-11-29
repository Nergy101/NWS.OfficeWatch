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
import { Address, AddressDocument } from 'src/model/address/address.model';
import { Country, CountryDocument } from 'src/model/country/country.model';
import { CountryService } from 'src/resolvers/country/country.service';
import { AddressService } from './address.service';

@Resolver(() => Address)
export class AddressResolver {
  constructor(
    private addressService: AddressService,
    private countryService: CountryService,
  ) {}

  @Query(() => Address)
  async address(
    @Args('addressId', { type: () => ID }) addressId: ObjectId,
  ): Promise<AddressDocument | null> {
    return this.addressService.getById(addressId);
  }

  @Query(() => [Address])
  async addresses(): Promise<AddressDocument[]> {
    return this.addressService.getAll();
  }

  @ResolveField(() => Country, { description: 'User that created the Address' })
  async country(@Parent() address: Address): Promise<CountryDocument | null> {
    return this.countryService.getById(address.countryId);
  }

  @Mutation(() => Address, { description: 'Creates posted Address' })
  async createAddress(
    @Args('createdAddress') createdAddress: CreateAddressInput,
  ): Promise<AddressDocument> {
    return this.addressService.create(createdAddress);
  }
}
