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
  CreateOfficeSpaceInput,
  UpdateOfficeSpaceInput,
} from 'src/model/office-space/office-space.inputs';
import {
  OfficeSpace,
  OfficeSpaceDocument,
} from 'src/model/office-space/office-space.model';
import { Office, OfficeDocument } from 'src/model/office/office.model';
import { DateRange } from 'src/model/reservation/daterange.model';
import { Reservation } from 'src/model/reservation/reservation.model';
import { DateRangeService } from 'src/services/shared/daterange-service';
import { OfficeSpaceService } from 'src/services/repositories/office-space.service';
import { OfficeService } from 'src/services/repositories/office.service';
import { ReservationService } from 'src/services/repositories/reservation.service';

@Resolver(() => OfficeSpace)
export class OfficeSpaceResolver {
  constructor(
    private officeService: OfficeService,
    private officeSpacesService: OfficeSpaceService,
    private reservationService: ReservationService,
    private dateRangeService: DateRangeService,
  ) {}

  @Query(() => OfficeSpace)
  async officeSpace(
    @Args('officeSpaceId', { type: () => ID }) officeSpaceId: ObjectId,
  ): Promise<OfficeSpaceDocument | null> {
    return this.officeSpacesService.getById(officeSpaceId);
  }

  @Query(() => [OfficeSpace])
  async officeSpaces(
    @Args('booked', { type: () => Boolean, nullable: true }) booked?: boolean,
  ): Promise<OfficeSpaceDocument[]> {
    return this.officeSpacesService.findAll(booked);
  }

  @ResolveField(() => Office, { description: 'Office of the Office space' })
  async office(@Parent() space: OfficeSpace): Promise<OfficeDocument | null> {
    return this.officeService.getById(space.officeId);
  }

  @ResolveField(() => Reservation, {
    description: 'Reservations of the Office space',
  })
  async reservations(
    @Parent() officeSpace: OfficeSpace,
  ): Promise<Reservation[]> {
    return this.reservationService.findAllByOfficeSpaceId(officeSpace._id);
  }

  @ResolveField(() => [DateRange], {
    description: 'Existing reservation dateranges of the Office space',
  })
  async unavailableDatesForOfficeSpaceId(
    @Parent() officeSpace: OfficeSpace,
  ): Promise<DateRange[]> {
    return this.dateRangeService.getNonAvailableDateRanges(officeSpace._id);
  }

  @Mutation(() => OfficeSpace, { description: 'Creates posted office-space' })
  async createOfficeSpace(
    @Args('createdOfficeSpace') createdOfficeSpace: CreateOfficeSpaceInput,
  ): Promise<OfficeSpaceDocument> {
    return this.officeSpacesService.create(createdOfficeSpace);
  }

  @Mutation(() => OfficeSpace, { description: 'Updates posted office-space' })
  async updateOfficeSpace(
    @Args('updatedOfficeSpace') updatedOfficeSpace: UpdateOfficeSpaceInput,
  ): Promise<OfficeSpaceDocument | null> {
    return this.officeSpacesService.update(updatedOfficeSpace);
  }

  @Mutation(() => OfficeSpace, {
    description: 'Deletes posted office-space by Id',
  })
  async deleteOfficeSpace(
    @Args('officeSpaceId', { type: () => ID }) officeSpaceId: ObjectId,
  ): Promise<OfficeSpaceDocument | null> {
    return this.officeSpacesService.delete(officeSpaceId);
  }
}
