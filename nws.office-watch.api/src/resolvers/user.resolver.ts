import { Office } from './../model/office.model';
import { ReservationService } from './../services/reservation.service';
import { OfficeService } from './../services/office.service';
import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from 'src/model/user.model';
import { UserService } from 'src/services/user.service';

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

  @ResolveField(() => Office, {description: 'Office the User has created'})
  async office(@Parent() user: User) {
    return this.officeService.findOneById(user.officeId);
  }

  @ResolveField(() => User, { description: 'Reservations of the User' })
  async reservations(@Parent() User: User) {
    return this.reservationService.findAllByUserId(User.userId);
  }
}
