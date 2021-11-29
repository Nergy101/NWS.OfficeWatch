import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { Schema as MongoSchema } from 'mongoose';
import { User } from '../user/user.model';

@Schema()
@ObjectType({ description: 'A reservation entity' })
export class Reservation {
  @Field((_type) => ID)
  _id: ObjectId;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: () => Reservation })
  @Field((_type) => ID)
  officeSpaceId: ObjectId;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: () => User })
  @Field((_type) => ID)
  reservedForId: ObjectId;
}

export type ReservationDocument = Reservation & Document;

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
