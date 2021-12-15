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
import {
  OfficeSpace,
  OfficeSpaceDocument,
} from 'src/model/office-space/office-space.model';
import { CreateReservationInput } from 'src/model/reservation/reservation.inputs';
import {
  Reservation,
  ReservationDocument,
} from 'src/model/reservation/reservation.model';
import { User, UserDocument } from 'src/model/user/user.model';
import { OfficeSpaceService } from 'src/services/repositories/office-space.service';
import { ReservationService } from 'src/services/repositories/reservation.service';
import { UserService } from 'src/services/repositories/user.service';

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
  ): Promise<ReservationDocument | null> {
    return this.reservationService.getById(reservationId);
  }

  @ResolveField(() => OfficeSpace, {
    description: 'Office space of the Reservation',
  })
  async officeSpace(
    @Parent() reservation: Reservation,
  ): Promise<OfficeSpaceDocument | null> {
    return this.officeSpacesService.getById(reservation.officeSpaceId);
  }

  @ResolveField(() => User, { description: 'User that made the Reservation' })
  async user(@Parent() reservation: Reservation): Promise<UserDocument | null> {
    return this.userService.getById(reservation.reservedForId);
  }

  @Mutation(() => Reservation, { description: 'Creates posted reservation' })
  async createReservation(
    @Args('createdReservation') createdReservation: CreateReservationInput,
  ): Promise<ReservationDocument> {
    return this.reservationService.create(createdReservation);
  }

  @Mutation(() => Reservation, {
    description: 'Deletes posted reservation by Id',
  })
  async deleteReservation(
    @Args('reservationId', { type: () => ID }) reservationId: ObjectId,
  ): Promise<Reservation | null> {
    return this.reservationService.delete(reservationId);
  }
}
