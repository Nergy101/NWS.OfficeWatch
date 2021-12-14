import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateUserInput,
  ListUserInput,
  UpdateUserInput,
} from 'src/model/user/user.inputs';
import { User, UserDocument } from 'src/model/user/user.model';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(payload: CreateUserInput): Promise<User> {
    const createdPerson = new this.userModel(payload);
    return createdPerson.save();
  }

  getById(_id: ObjectId): Promise<UserDocument | null> {
    return this.userModel.findById(_id).exec();
  }

  list(filters: ListUserInput): Promise<UserDocument[]> {
    return this.userModel.find({ ...filters }).exec();
  }

  update(payload: UpdateUserInput): Promise<UserDocument | null> {
    return this.userModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: ObjectId): Promise<UserDocument | null> {
    return this.userModel.findByIdAndDelete(_id).exec();
  }
}
