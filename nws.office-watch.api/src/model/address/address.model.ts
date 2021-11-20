import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { Country } from '../country/country.model';
import { Schema as MongoSchema } from 'mongoose';

@Schema()
@ObjectType({ description: 'An address entity' })
export class Address {
  @Field((type) => ID)
  _id: ObjectId;

  @Prop()
  @Field()
  postal: string;

  @Prop()
  @Field()
  streetName: string;

  @Prop()
  @Field((type) => Int)
  streetNumber: number;

  @Prop()
  @Field()
  city: string;

  @Prop()
  @Field()
  area: string;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: () => Country })
  @Field((type) => ID)
  countryId: ObjectId;
}

export type AddressDocument = Address & Document;

export const AddressSchema = SchemaFactory.createForClass(Address);
