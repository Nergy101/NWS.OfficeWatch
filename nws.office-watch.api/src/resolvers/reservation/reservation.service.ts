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

  create(payload: CreateReservationInput) {
    const createdPerson = new this.ReservationModel(payload);
    return createdPerson.save();
  }

  getById(_id: ObjectId) {
    return this.ReservationModel.findById(_id).exec();
  }

  findAllByOfficeSpaceId(officeSpaceId: ObjectId) {
    return this.ReservationModel.find({ officeSpaceId }).exec();
  }

  findAllByUserId(userId: ObjectId) {
    return this.ReservationModel.find({ reservedForId: userId }).exec();
  }

  delete(_id: ObjectId) {
    return this.ReservationModel.findByIdAndDelete(_id).exec();
  }
}
