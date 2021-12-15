import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateReservationInput } from 'src/model/reservation/reservation.inputs';
import {
  Reservation,
  ReservationDocument,
} from 'src/model/reservation/reservation.model';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation.name)
    private ReservationModel: Model<ReservationDocument>,
  ) {}

  create(payload: CreateReservationInput): Promise<ReservationDocument> {
    const createdReservation = new this.ReservationModel(payload);
    return createdReservation.save();
  }

  getById(_id: ObjectId): Promise<ReservationDocument | null> {
    return this.ReservationModel.findById(_id).exec();
  }

  findAllByOfficeSpaceId(
    officeSpaceId: ObjectId,
  ): Promise<ReservationDocument[]> {
    return this.ReservationModel.find({ officeSpaceId }).exec();
  }

  findAllByUserId(userId: ObjectId): Promise<ReservationDocument[]> {
    return this.ReservationModel.find({ reservedForId: userId }).exec();
  }

  delete(_id: ObjectId): Promise<ReservationDocument | null> {
    return this.ReservationModel.findByIdAndDelete(_id).exec();
  }
}
