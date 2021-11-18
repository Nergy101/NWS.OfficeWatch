import { Office } from '../../model/office/office.model';
import { OfficeService } from '../office/office.service';
import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from 'src/model/user/user.model';
import { UserService } from 'src/resolvers/user/user.service';
import { ReservationService } from '../reservation/reservation.service';
import {v4 as uuidv4} from 'uuid';
import { ObjectId, Schema } from 'mongoose';
import { CreateUserInput } from 'src/model/user/user.inputs';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,

    private officeService: OfficeService,
    private reservationService: ReservationService,
  ) {}

  @Query(() => User)
  async user(@Args('_id', { type: () => ID }) _id: ObjectId) {
    return this.userService.getById(_id);
  }

  @ResolveField(() => Office, { description: 'Office the User has created' })
  async office(@Parent() user: User) {
    return this.officeService.getById(user.officeId);
  }

  @ResolveField(() => User, { description: 'Reservations of the User' })
  async reservations(@Parent() user: User) {
    return this.reservationService.findAllByUserId(user._id);
  }

  @Mutation(() => User, { description: 'Creates posted user' })
  async createUser(@Args('createdUser') createdUser: CreateUserInput) {
    return this.userService.create({
      birthday: createdUser.birthday,
      firstName: createdUser.firstName,
      middleName: createdUser.middleName,
      lastName: createdUser.lastName,
      emailAddress: createdUser.emailAddress,
      lockedOut: false,
      officeId: null,
    } as User);
  }

  @Mutation(() => Boolean, { description: 'Deletes user by id' })
  async deleteUser(@Args('_id', {type: () => ID}) _id: ObjectId) {
    return this.userService.delete(_id);
  }
}
