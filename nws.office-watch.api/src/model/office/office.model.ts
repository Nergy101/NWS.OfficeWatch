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

  @Prop({ type: MongoSchema.Types.ObjectId, ref: () => User.name })
  @Field((type) => ID,  { description: 'User GUID' })
  creatorId: ObjectId;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: () => Address.name })
  @Field((type) => ID, { description: 'Address GUID' })
  addressId: ObjectId;

  @Prop([{ type: MongoSchema.Types.ObjectId, ref: () => OfficeSpace.name }])
  @Field((type) => [ID], { nullable: true, description: 'GUIDs of the office-spaces in the office' })
  officeSpaceIds?: [MongoSchema.Types.ObjectId];
}

export type OfficeDocument = Office & Document;

export const OfficeSchema = SchemaFactory.createForClass(Office);
