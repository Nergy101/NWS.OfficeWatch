import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import {
  CreateOfficeInput,
  UpdateOfficeInput,
} from 'src/model/office/office.inputs';
import { Office, OfficeDocument } from 'src/model/office/office.model';

@Injectable()
export class OfficeService {
  constructor(
    @InjectModel(Office.name)
    private OfficeModel: Model<OfficeDocument>,
  ) {}

  create(payload: CreateOfficeInput) {
    const createdOffice = new this.OfficeModel(payload);
    return createdOffice.save();
  }

  update(payload: UpdateOfficeInput) {
    this.OfficeModel.findByIdAndUpdate(payload._id, payload, { new: true }).exec();
    return this.getById(payload._id);
  }

  getById(_id: ObjectId) {
    return this.OfficeModel.findById(_id).exec();
  }

  findAll(booked?: boolean) {
    if (booked != null) {
      return this.OfficeModel.find({ booked }).exec();
    }

    return this.OfficeModel.find().exec();
  }

  delete(_id: ObjectId) {
    return this.OfficeModel.findByIdAndDelete(_id).exec();
  }
}
