import { Field, Float, ID, InputType, Int } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType({ description: 'An office-space entity' })
export class CreateOfficeSpaceInput {
  @Field((type) => ID)
  officeId: ObjectId;

  @Field((type) => String)
  name: string;

  @Field((type) => Float)
  rating: number;

  @Field((type) => Int)
  forAmountOfPeople: number;

  @Field()
  availableFrom: Date;

  @Field()
  availableUntil: Date;

  @Field((type) => Float, { nullable: true })
  price?: number;

  @Field({ defaultValue: false })
  booked: boolean;
}

@InputType({ description: 'An office-space update model' })
export class UpdateOfficeSpaceInput {
  @Field((type) => ID)
  _id: ObjectId;

  @Field((type) => String)
  name: string;

  @Field((type) => Float)
  rating: number;

  @Field((type) => Int)
  forAmountOfPeople: number;

  @Field()
  availableFrom: Date;

  @Field()
  availableUntil: Date;

  @Field((type) => Float, { nullable: true })
  price?: number;

  @Field({ defaultValue: false })
  booked: boolean;
}
