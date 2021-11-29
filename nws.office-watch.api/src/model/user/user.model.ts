import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document, ObjectId } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Office } from '../office/office.model';
import { Reservation } from '../reservation/reservation.model';
import { Schema as MongoSchema } from 'mongoose';

@Schema()
@ObjectType({ description: 'A user entity' })
export class User {
  @Field((_type) => ID)
  _id: ObjectId;

  @Prop()
  @Field()
  birthday: Date;

  @Prop()
  @Field()
  firstName: string;

  @Prop()
  @Field({ nullable: true })
  middleName?: string;

  @Prop()
  @Field()
  lastName: string;

  @Prop()
  @Field()
  emailAddress: string;

  @Prop()
  @Field({ defaultValue: false })
  lockedOut: boolean;

  @Prop()
  @Field({ nullable: true })
  lockedUntil?: Date;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: (): string => Office.name })
  @Field((_type) => ID, { nullable: true })
  officeId?: ObjectId;

  @Prop([
    { type: MongoSchema.Types.ObjectId, ref: (): string => Reservation.name },
  ])
  @Field((_type) => [Reservation], { nullable: true })
  reservations?: Reservation[];
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
