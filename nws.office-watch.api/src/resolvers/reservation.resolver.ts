import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OfficeSpace } from 'src/model/office-space.model';
import { Reservation } from 'src/model/reservation.model';
import { User } from 'src/model/user.model';
import { OfficeSpaceService } from 'src/services/office-space.service';
import { ReservationService } from 'src/services/reservation.service';
import { UserService } from 'src/services/user.service';

@Resolver(() => Reservation)
export class ReservationResolver {
  constructor(
    private officeSpacesService: OfficeSpaceService,
    private userService: UserService,
    private reservationService: ReservationService,
  ) {}

  @Query(() => Reservation)
  async reservation(
    @Args('reservationId', { type: () => ID }) reservationId: string,
  ) {
    return this.reservationService.findOneById(reservationId);
  }

  @ResolveField(() => OfficeSpace, {
    description: 'Office space of the Reservation',
  })
  async officeSpace(@Parent() reservation: Reservation) {
    return this.officeSpacesService.findOneById(reservation.officeSpaceId);
  }

  @ResolveField(() => User, { description: 'User that made the Reservation' })
  async user(@Parent() reservation: Reservation) {
    return this.userService.findOneById(reservation.reservedForId);
  }
}
