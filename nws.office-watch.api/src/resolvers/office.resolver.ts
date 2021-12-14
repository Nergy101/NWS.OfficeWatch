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
import { Address, AddressDocument } from 'src/model/address/address.model';
import {
  OfficeSpace,
  OfficeSpaceDocument,
} from 'src/model/office-space/office-space.model';
import {
  CreateOfficeInput,
  UpdateOfficeInput,
} from 'src/model/office/office.inputs';
import { Office, OfficeDocument } from 'src/model/office/office.model';
import { User, UserDocument } from 'src/model/user/user.model';
import { AddressService } from 'src/services/repositories/address.service';
import { OfficeSpaceService } from 'src/services/repositories/office-space.service';
import { OfficeService } from 'src/services/repositories/office.service';
import { UserService } from 'src/services/repositories/user.service';

@Resolver(() => Office)
export class OfficeResolver {
  constructor(
    private officeService: OfficeService,
    private officeSpacesService: OfficeSpaceService,
    private addressService: AddressService,
    private userService: UserService,
  ) {}

  @Query(() => Office, { nullable: true })
  async office(
    @Args('officeId', { type: () => ID }) officeId: ObjectId,
  ): Promise<OfficeDocument | null> {
    return this.officeService.getById(officeId);
  }

  @Query(() => [Office], { nullable: true })
  async offices(): Promise<OfficeDocument[]> {
    return this.officeService.findAll();
  }

  @ResolveField(() => [OfficeSpace], {
    description: 'Office spaces in the office',
  })
  async officeSpaces(@Parent() office: Office): Promise<OfficeSpaceDocument[]> {
    return this.officeSpacesService.findAllByOfficeId(office._id);
  }

  @ResolveField(() => User, { description: 'User that created the Office' })
  async creator(@Parent() office: Office): Promise<UserDocument | null> {
    return this.userService.getById(office.creatorId);
  }

  @ResolveField(() => Address, { description: 'Address of the Office' })
  async address(@Parent() office: Office): Promise<AddressDocument | null> {
    return this.addressService.getById(office.addressId);
  }

  @Mutation(() => Office, { description: 'Creates posted office' })
  async createOffice(
    @Args('createdOffice') createdOffice: CreateOfficeInput,
  ): Promise<OfficeDocument> {
    return this.officeService.create(createdOffice);
  }

  @Mutation(() => Office, { description: 'Updates posted office' })
  async updateOffice(
    @Args('updatedOffice') updatedOffice: UpdateOfficeInput,
  ): Promise<OfficeDocument | null> {
    return this.officeService.update(updatedOffice);
  }

  @Mutation(() => Office, { description: 'Deletes office by posted Id' })
  async deleteOffice(
    @Args('officeId', { type: () => ID }) officeId: ObjectId,
  ): Promise<OfficeDocument | null> {
    return this.officeService.delete(officeId);
  }
}
