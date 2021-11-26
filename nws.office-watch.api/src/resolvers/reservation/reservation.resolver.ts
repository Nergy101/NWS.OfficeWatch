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
import { OfficeSpace } from 'src/model/office-space/office-space.model';
import { CreateReservationInput } from 'src/model/reservation/reservation.inputs';
import { Reservation } from 'src/model/reservation/reservation.model';
import { User } from 'src/model/user/user.model';
import { OfficeSpaceService } from 'src/resolvers/office-space/office-space.service';
import { ReservationService } from 'src/resolvers/reservation/reservation.service';
import { UserService } from 'src/resolvers/user/user.service';

@Resolver(() => Reservation)
export class ReservationResolver {
  constructor(
    private officeSpacesService: OfficeSpaceService,
    private reservationService: ReservationService,
    private userService: UserService,
  ) {}

  @Query(() => Reservation)
  async reservation(
    @Args('reservationId', { type: () => ID }) reservationId: ObjectId,
  ) {
    return this.reservationService.getById(reservationId);
  }

  @ResolveField(() => OfficeSpace, {
    description: 'Office space of the Reservation',
  })
  async officeSpace(@Parent() reservation: Reservation) {
    return this.officeSpacesService.getById(reservation.officeSpaceId);
  }

  @ResolveField(() => User, { description: 'User that made the Reservation' })
  async user(@Parent() reservation: Reservation) {
    return this.userService.getById(reservation.reservedForId);
  }

  @Mutation(() => Reservation, { description: 'Creates posted reservation' })
  async createReservation(
    @Args('createdReservation') createdReservation: CreateReservationInput,
  ) {
    return this.reservationService.create(createdReservation);
  }

  @Mutation(() => Reservation, {
    description: 'Deletes posted reservation by Id',
  })
  async deleteReservation(
    @Args('reservationId', { type: () => ID }) reservationId: ObjectId,
  ) {
    return this.reservationService.delete(reservationId);
  }
}
