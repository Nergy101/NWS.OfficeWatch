import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { DateRange } from 'src/model/reservation/daterange.model';
import { CreateReservationInput } from 'src/model/reservation/reservation.inputs';
import {
  Reservation,
  ReservationDocument,
} from 'src/model/reservation/reservation.model';

@Injectable()
export class DateRangeService {
  constructor(
    @InjectModel(Reservation.name)
    private ReservationModel: Model<ReservationDocument>,
  ) {}

  async getNonAvailableDateRanges(
    officeSpaceId: ObjectId,
  ): Promise<DateRange[]> {
    var reservationDates = await this.ReservationModel.find(
      {
        officeSpaceId,
      },
      { projection: { _id: 1, fromDateUtc: 1, toDateUtc: 1 } },
    ).exec();

    var dateRanges: DateRange[] = [];

    for (const reservation of reservationDates) {
      dateRanges.push({
        fromDateUtc: reservation.fromDateUtc,
        toDateUtc: reservation.toDateUtc,
      });
    }

    return dateRanges;
  }
}
