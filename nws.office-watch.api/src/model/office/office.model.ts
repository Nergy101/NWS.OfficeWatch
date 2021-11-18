import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { Address } from '../address/address.model';
import { OfficeSpace } from '../office-space/office-space.model';
import { User } from '../user/user.model';
import { Schema as MongoSchema } from 'mongoose';

@Schema()
@ObjectType({ description: 'An office entity' })
export class Office {
  @Field((type) => ID, { description: 'Office GUID' })
  _id: ObjectId;

  @Prop()
  @Field({ description: 'Company name' })
  name: string;

  @Prop()
  @Field()
  createdAt: Date;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: () => User })
  @Field((type) => ID)
  creatorId: ObjectId;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: () => Address })
  @Field((type) => ID)
  addressId: ObjectId;

  @Prop()
  @Field((type) => [OfficeSpace], { nullable: true })
  officeSpaces?: OfficeSpace[];
}

export type OfficeDocument = Office & Document;

export const OfficeSchema = SchemaFactory.createForClass(Office);
