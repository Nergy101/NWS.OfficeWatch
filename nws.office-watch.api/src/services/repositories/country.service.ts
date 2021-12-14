import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateCountryInput } from 'src/model/country/country.inputs';
import { Country, CountryDocument } from 'src/model/country/country.model';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name)
    private countryModel: Model<CountryDocument>,
  ) {}

  getById(_id: ObjectId): Promise<CountryDocument | null> {
    return this.countryModel.findById(_id).exec();
  }

  findAll(booked?: boolean): Promise<CountryDocument[]> {
    if (booked != null) {
      return this.countryModel.find({ booked }).exec();
    }

    return this.countryModel.find().exec();
  }

  create(payload: CreateCountryInput): Promise<CountryDocument> {
    const createdCountry = new this.countryModel(payload);
    return createdCountry.save();
  }

  delete(_id: ObjectId): Promise<CountryDocument | null> {
    return this.countryModel.findByIdAndDelete(_id).exec();
  }
}
