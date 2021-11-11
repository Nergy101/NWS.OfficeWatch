import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OfficeSpace } from 'src/model/office-space.model';
import { Office } from 'src/model/office.model';
import { Reservation } from 'src/model/reservation.model';
import { OfficeSpaceService } from 'src/services/office-space.service';
import { OfficeService } from 'src/services/office.service';
import { ReservationService } from 'src/services/reservation.service';

@Resolver(() => OfficeSpace)
export class OfficeSpaceResolver {
  constructor(
    private officeService: OfficeService,
    private officeSpacesService: OfficeSpaceService,
    private reservationService: ReservationService,
  ) {}

  @Query(() => OfficeSpace)
  async officeSpace(
    @Args('officeSpaceId', { type: () => ID }) officeSpaceId: string,
  ) {
    return this.officeSpacesService.findOneById(officeSpaceId);
  }

  @ResolveField(() => Office, { description: 'Office of the Office space' })
  async office(@Parent() space: OfficeSpace) {
    return this.officeService.findOneById(space.officeId);
  }

  @ResolveField(() => Reservation, {
    description: 'Reservations of the Office space',
  })
  async reservations(@Parent() officeSpace: OfficeSpace) {
    return this.reservationService.findAllByOfficeSpaceId(
      officeSpace.officeSpaceId,
    );
  }
}
