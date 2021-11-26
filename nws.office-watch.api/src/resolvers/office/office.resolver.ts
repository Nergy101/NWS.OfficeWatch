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
import { Address } from 'src/model/address/address.model';
import { OfficeSpace } from 'src/model/office-space/office-space.model';
import {
  CreateOfficeInput,
  UpdateOfficeInput,
} from 'src/model/office/office.inputs';
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
  async office(@Args('officeId', { type: () => ID }) officeId: ObjectId) {
    return this.officeService.getById(officeId);
  }

  @ResolveField(() => [OfficeSpace], {
    description: 'Office spaces in the office',
  })
  async officeSpaces(@Parent() office: Office) {
    return this.officeSpacesService.findAllByOfficeId(office._id);
  }

  @ResolveField(() => User, { description: 'User that created the Office' })
  async creator(@Parent() office: Office) {
    return this.userService.getById(office.creatorId);
  }

  @ResolveField(() => Address, { description: 'Address of the Office' })
  async address(@Parent() office: Office) {
    return this.addressService.getById(office.addressId);
  }

  @Mutation(() => Office, { description: 'Creates posted office' })
  async createOffice(@Args('createdOffice') createdOffice: CreateOfficeInput) {
    return this.officeService.create(createdOffice);
  }

  @Mutation(() => Office, { description: 'Updates posted office' })
  async updateOffice(@Args('updatedOffice') updatedOffice: UpdateOfficeInput) {
    return this.officeService.update(updatedOffice);
  }

  @Mutation(() => Office, { description: 'Deletes office by posted Id' })
  async deleteOffice(@Args('officeId', { type: () => ID }) officeId: ObjectId) {
    return this.officeService.delete(officeId);
  }
}
