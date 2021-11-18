import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Country, CountryDocument } from 'src/model/country/country.model';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name)
    private countryModel: Model<CountryDocument>,
  ) {}

  getById(_id: ObjectId) {
    return this.countryModel.findById(_id).exec();
  }

  findAll(booked?: boolean) {
    if (booked != null) {
      return this.countryModel.find({ booked }).exec();
    }

    return this.countryModel.find().exec();
  }

  delete(_id: ObjectId) {
    return this.countryModel.findByIdAndDelete(_id).exec();
  }
}
