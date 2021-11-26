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

  @Field((type) => ID, {
    description: 'userId of the user that created this Office',
  })
  creatorId: string;

  @Field((type) => ID)
  addressId: string;
}

@InputType()
export class UpdateOfficeInput {
  @Field((type) => ID, { description: 'Office GUID' })
  _id: ObjectId;

  @Field({ description: 'Company name' })
  name: string;

  @Field((type) => ID)
  creatorId: ObjectId;

  @Field((type) => ID)
  addressId: ObjectId;
}