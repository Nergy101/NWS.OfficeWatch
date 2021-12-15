import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class CreateOfficeInput {
  @Field({ description: 'Company name' })
  name: string;

  @Field({
    description: 'Date of Office creation in OfficeWatch',
    defaultValue: new Date(),
  })
  createdAt: Date;

  @Field((_type) => ID, {
    description: 'userId of the user that created this Office',
  })
  creatorId: string;

  @Field((_type) => ID)
  addressId: string;
}

@InputType()
export class UpdateOfficeInput {
  @Field((_type) => ID, { description: 'Office GUID' })
  _id: ObjectId;

  @Field({ description: 'Company name' })
  name: string;

  @Field((_type) => ID)
  creatorId: ObjectId;

  @Field((_type) => ID)
  addressId: ObjectId;
}
