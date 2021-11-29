import { Field, ObjectType, Int, Float, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { Office } from '../office/office.model';
import { Reservation } from '../reservation/reservation.model';
import { Schema as MongoSchema } from 'mongoose';

@Schema()
@ObjectType({ description: 'An office-space entity' })
export class OfficeSpace {
  @Field((_type) => ID)
  _id: ObjectId;

  @Prop()
  @Field((_type) => String)
  name: string;

  @Prop()
  @Field((_type) => Float)
  rating: number;

  @Prop()
  @Field((_type) => Int)
  forAmountOfPeople: number;

  @Prop()
  @Field()
  availableFrom: Date;

  @Prop()
  @Field()
  availableUntil: Date;

  @Prop()
  @Field((_type) => Float, { nullable: true })
  price?: number;

  @Prop()
  @Field({ defaultValue: false })
  booked: boolean;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: () => Office })
  @Field((_type) => ID)
  officeId: ObjectId;

  @Prop()
  @Field((_type) => [Reservation], { nullable: true })
  reservations?: Reservation[];
}

export type OfficeSpaceDocument = OfficeSpace & Document;

export const OfficeSpaceSchema = SchemaFactory.createForClass(OfficeSpace);
