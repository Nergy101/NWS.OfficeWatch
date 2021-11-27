import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import {
  CreateOfficeSpaceInput,
  UpdateOfficeSpaceInput,
} from 'src/model/office-space/office-space.inputs';
import {
  OfficeSpace,
  OfficeSpaceDocument,
} from 'src/model/office-space/office-space.model';

@Injectable()
export class OfficeSpaceService {
  constructor(
    @InjectModel(OfficeSpace.name)
    private OfficeSpaceModel: Model<OfficeSpaceDocument>,
  ) {}

  create(payload: CreateOfficeSpaceInput) {
    const createdPerson = new this.OfficeSpaceModel(payload);
    return createdPerson.save();
  }

  update(payload: UpdateOfficeSpaceInput) {
    this.OfficeSpaceModel.findByIdAndUpdate(payload._id, payload, {
      new: true,
    }).exec();
    return this.getById(payload._id);
  }

  getById(_id: ObjectId) {
    return this.OfficeSpaceModel.findById(_id).exec();
  }

  findAll(booked?: boolean) {
    if (booked != null) {
      return this.OfficeSpaceModel.find({ booked }).exec();
    }

    return this.OfficeSpaceModel.find().exec();
  }

  findAllByOfficeId(officeId: ObjectId) {
    return this.OfficeSpaceModel.find({ officeId }).exec();
  }

  delete(_id: ObjectId) {
    return this.OfficeSpaceModel.findByIdAndDelete(_id).exec();
  }
}
