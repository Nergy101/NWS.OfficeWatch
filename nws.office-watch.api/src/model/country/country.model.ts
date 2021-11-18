import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

@Schema()
@ObjectType({ description: 'A country entity' })
export class Country {
  @Field((type) => ID)
  _id: ObjectId;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  iso2Name: string;

  @Prop()
  @Field()
  iso3Name: string;

  @Prop()
  @Field()
  continent: string;
}

export type CountryDocument = Country & Document;

export const CountrySchema = SchemaFactory.createForClass(Country);