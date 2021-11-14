import { Injectable } from '@nestjs/common';
import { Reservation } from 'src/model/reservation.model';

@Injectable()
export class ReservationService {
  private readonly reservations: Reservation[] = [
    {
      reservationId: '1',
      officeSpaceId: '1',
      reservedForId: '1',
    },
    {
      reservationId: '2',
      officeSpaceId: '1',
      reservedForId: '2',
    },
  ];

  create(space: Reservation) {
    this.reservations.push(space);
  }

  findOneById(reservationId: string): Reservation | undefined {
    const reservations = this.reservations.filter(
      (os) => os.reservationId === reservationId,
    );
    if (reservations.length > 0) {
      return reservations[0];
    }
    return undefined;
  }

  findAllByOfficeSpaceId(officeSpaceId: string): Reservation[] {
    return this.reservations.filter((os) => os.officeSpaceId === officeSpaceId);
  }

  findAllByUserId(userId: string): Reservation[] {
    return this.reservations.filter((os) => os.reservedForId === userId);
  }

  findAll(): Reservation[] {
    return this.reservations;
  }
}
