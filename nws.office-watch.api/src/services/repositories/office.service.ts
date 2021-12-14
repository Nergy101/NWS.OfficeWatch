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
    private officeModel: Model<OfficeDocument>,
  ) {}

  create(payload: CreateOfficeInput): Promise<OfficeDocument> {
    const createdOffice = new this.officeModel(payload);
    return createdOffice.save();
  }

  update(payload: UpdateOfficeInput): Promise<OfficeDocument | null> {
    this.officeModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
    return this.getById(payload._id);
  }

  getById(_id: ObjectId): Promise<OfficeDocument | null> {
    return this.officeModel.findById(_id).exec();
  }

  findAll(): Promise<OfficeDocument[]> {
    return this.officeModel.find().exec();
  }

  delete(_id: ObjectId): Promise<OfficeDocument | null> {
    return this.officeModel.findByIdAndDelete(_id).exec();
  }
}
