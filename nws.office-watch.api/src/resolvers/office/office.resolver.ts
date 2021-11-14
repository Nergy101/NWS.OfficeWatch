import { forwardRef, Inject } from '@nestjs/common';
import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Address } from 'src/model/address/address.model';
import { Office } from 'src/model/office/office.model';
import { User } from 'src/model/user/user.model';
import { OfficeSpaceService } from 'src/resolvers/office-space/office-space.service';
import { OfficeService } from 'src/resolvers/office/office.service';
import { UserService } from 'src/resolvers/user/user.service';
import { AddressService } from '../address/address.service';

@Resolver(() => Office)
export class OfficeResolver {
  constructor(
    private officeService: OfficeService,
    private officeSpacesService: OfficeSpaceService,
    private addressService: AddressService,
    private userService: UserService,
  ) {}

  @Query(() => Office, { nullable: true })
  async office(@Args('officeId', { type: () => ID }) officeId: string) {
    return this.officeService.findOneById(officeId);
  }

  @ResolveField()
  async officeSpaces(@Parent() office: Office) {
    return this.officeSpacesService.findAllByOfficeId(office.officeId);
  }

  @ResolveField(() => User, { description: 'User that created the Office' })
  async creator(@Parent() office: Office) {
    return this.userService.findOneById(office.creatorId);
  }

  @ResolveField(() => Address, { description: 'Address of the Office' })
  async address(@Parent() office: Office) {
    return this.addressService.findOneById(office.addressId);
  }
}
