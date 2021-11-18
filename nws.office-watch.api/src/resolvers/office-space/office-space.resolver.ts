import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { OfficeSpace } from 'src/model/office-space/office-space.model';
import { Office } from 'src/model/office/office.model';
import { Reservation } from 'src/model/reservation/reservation.model';
import { OfficeSpaceService } from 'src/resolvers/office-space/office-space.service';
import { OfficeService } from 'src/resolvers/office/office.service';
import { ReservationService } from 'src/resolvers/reservation/reservation.service';

@Resolver(() => OfficeSpace)
export class OfficeSpaceResolver {
  constructor(
    private officeService: OfficeService,
    private officeSpacesService: OfficeSpaceService,
    private reservationService: ReservationService,
  ) {}

  @Query(() => OfficeSpace)
  async officeSpace(
    @Args('officeSpaceId', { type: () => ID }) officeSpaceId: ObjectId,
  ) {
    return this.officeSpacesService.getById(officeSpaceId);
  }

  @Query(() => [OfficeSpace])
  async officeSpaces(
    @Args('booked', { type: () => Boolean, nullable: true }) booked?: boolean,
  ) {
    return this.officeSpacesService.findAll(booked);
  }

  @ResolveField(() => Office, { description: 'Office of the Office space' })
  async office(@Parent() space: OfficeSpace) {
    return this.officeService.getById(space.officeId);
  }

  @ResolveField(() => Reservation, {
    description: 'Reservations of the Office space',
  })
  async reservations(@Parent() officeSpace: OfficeSpace) {
    return this.reservationService.findAllByOfficeSpaceId(
      officeSpace._id,
    );
  }
}
