import { InputType, Field, Int, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class CreateAddressInput {
  @Field()
  postal: string;

  @Field()
  streetName: string;

  @Field((type) => Int)
  streetNumber: number;

  @Field()
  city: string;

  @Field()
  area: string;

  @Field((type) => ID)
  countryId: ObjectId;
}
