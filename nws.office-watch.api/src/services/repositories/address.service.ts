import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateAddressInput } from 'src/model/address/address.inputs';
import { Address, AddressDocument } from 'src/model/address/address.model';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name)
    private addressModel: Model<AddressDocument>,
  ) {}

  create(payload: CreateAddressInput): Promise<AddressDocument> {
    const createdAddress = new this.addressModel(payload);
    return createdAddress.save();
  }

  getById(_id: ObjectId): Promise<AddressDocument | null> {
    return this.addressModel.findById(_id).exec();
  }

  getAll(): Promise<AddressDocument[]> {
    return this.addressModel.find().exec();
  }

  delete(_id: ObjectId): Promise<AddressDocument | null> {
    return this.addressModel.findByIdAndDelete(_id).exec();
  }
}
