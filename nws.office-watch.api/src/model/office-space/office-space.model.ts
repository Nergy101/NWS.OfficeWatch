import { Field, ObjectType, Int, Float, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { Office } from '../office/office.model';
import { Reservation } from '../reservation/reservation.model';
import { Schema as MongoSchema } from 'mongoose';

@Schema()
@ObjectType({ description: 'An office-space entity' })
export class OfficeSpace {
  @Field((type) => ID)
  _id: ObjectId;

  @Prop()
  @Field((type) => String)
  name: string;

  @Prop()
  @Field((type) => Float)
  rating: number;

  @Prop()
  @Field((type) => Int)
  forAmountOfPeople: number;

  @Prop()
  @Field()
  availableFrom: Date;

  @Prop()
  @Field()
  availableUntil: Date;

  @Prop()
  @Field((type) => Float, { nullable: true })
  price?: number;

  @Prop()
  @Field({ defaultValue: false })
  booked: boolean;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: () => Office })
  @Field((type) => ID)
  officeId: ObjectId;

  @Prop()
  @Field((type) => [Reservation], { nullable: true })
  reservations?: Reservation[];
}

export type OfficeSpaceDocument = OfficeSpace & Document;

export const OfficeSpaceSchema = SchemaFactory.createForClass(OfficeSpace);