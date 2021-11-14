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
import { UserCreateInput } from 'src/model/user/user.create.model';
import {v4 as uuidv4} from 'uuid';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,

    private officeService: OfficeService,
    private reservationService: ReservationService,
  ) {}

  @Query(() => User)
  async user(@Args('userId', { type: () => ID }) userId: string) {
    return this.userService.findOneById(userId);
  }

  @ResolveField(() => Office, { description: 'Office the User has created' })
  async office(@Parent() user: User) {
    return this.officeService.findOneById(user.officeId);
  }

  @ResolveField(() => User, { description: 'Reservations of the User' })
  async reservations(@Parent() User: User) {
    return this.reservationService.findAllByUserId(User.userId);
  }

  @Mutation(() => User, { description: 'Creates posted user' })
  async createUser(@Args('createdUser') createdUser: UserCreateInput) {
    return this.userService.create({
      userId: uuidv4(),
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
  async deleteUser(@Args('userId') userId: string) {
    return this.userService.deleteById(userId);
  }
}
