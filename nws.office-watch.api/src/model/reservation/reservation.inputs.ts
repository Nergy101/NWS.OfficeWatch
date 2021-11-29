import { Field, ID, InputType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType({ description: 'A reservation entity' })
export class CreateReservationInput {
  @Field((_type) => ID)
  officeSpaceId: ObjectId;

  @Field((_type) => ID)
  reservedForId: ObjectId;
}
