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

  create(payload: CreateAddressInput) {
    const createdAddress = new this.addressModel(payload);
    return createdAddress.save();
  }

  getById(_id: ObjectId) {
    return this.addressModel.findById(_id).exec();
  }

  delete(_id: ObjectId) {
    return this.addressModel.findByIdAndDelete(_id).exec();
  }
}
