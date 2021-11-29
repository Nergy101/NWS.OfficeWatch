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
import { User, UserDocument } from 'src/model/user/user.model';
import { UserService } from 'src/resolvers/user/user.service';
import { ReservationService } from '../reservation/reservation.service';
import { ObjectId } from 'mongoose';
import { CreateUserInput } from 'src/model/user/user.inputs';
import { Reservation } from 'src/model/reservation/reservation.model';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,

    private officeService: OfficeService,
    private reservationService: ReservationService,
  ) {}

  @Query(() => User)
  async user(
    @Args('_id', { type: () => ID }) _id: ObjectId,
  ): Promise<UserDocument | null> {
    return this.userService.getById(_id);
  }

  @ResolveField(() => Office, {
    nullable: true,
    description: 'Office the User may have created',
  })
  async office(@Parent() user: User): Promise<Office | null> {
    if (user.officeId) {
      return this.officeService.getById(user.officeId);
    }
    return null;
  }

  @ResolveField(() => [Reservation], {
    nullable: true,
    description: 'Reservations of the User',
  })
  async reservations(@Parent() user: User): Promise<Reservation[]> {
    return this.reservationService.findAllByUserId(user._id);
  }

  @Mutation(() => User, { description: 'Creates posted user' })
  async createUser(
    @Args('createdUser') createdUser: CreateUserInput,
  ): Promise<User> {
    return this.userService.create({
      birthday: createdUser.birthday,
      firstName: createdUser.firstName,
      middleName: createdUser.middleName,
      lastName: createdUser.lastName,
      emailAddress: createdUser.emailAddress,
      lockedOut: false,
    });
  }

  @Mutation(() => Boolean, { description: 'Deletes user by id' })
  async deleteUser(
    @Args('_id', { type: () => ID }) _id: ObjectId,
  ): Promise<boolean> {
    if (await this.userService.delete(_id)) {
      return true;
    }

    return false;
  }
}
