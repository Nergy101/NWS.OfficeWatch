import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateUserInput,
  ListUserInput,
  UpdateUserInput,
} from 'src/model/user/user.inputs';
import { User, UserDocument } from 'src/model/user/user.model';
import { Model, ObjectId, Schema as MongooseSchema } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(payload: CreateUserInput) {
    const createdPerson = new this.userModel(payload);
    return createdPerson.save();
  }

  getById(_id: ObjectId) {
    return this.userModel.findById(_id).exec();
  }

  list(filters: ListUserInput) {
    return this.userModel.find({ ...filters }).exec();
  }

  update(payload: UpdateUserInput) {
    return this.userModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: ObjectId) {
    return this.userModel.findByIdAndDelete(_id).exec();
  }
}
