import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Address } from 'src/model/address.model';
import { Office } from 'src/model/office.model';
import { User } from 'src/model/user.model';
import { AddressService } from 'src/services/address.service';
import { OfficeSpaceService } from 'src/services/office-space.service';
import { OfficeService } from 'src/services/office.service';
import { UserService } from 'src/services/user.service';

@Resolver(() => Office)
export class OfficeResolver {
  constructor(
    private officeService: OfficeService,
    private officeSpacesService: OfficeSpaceService,
    private addressService: AddressService,
    private userService: UserService,
  ) {}

  @Query(() => Office)
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
