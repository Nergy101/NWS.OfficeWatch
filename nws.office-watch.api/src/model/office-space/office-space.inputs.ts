import { Field, Float, ID, InputType, Int } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { CreateRatingInput, UpdateRatingInput } from './rating.inputs';
import { Rating } from './rating.model';

@InputType({ description: 'An office-space entity' })
export class CreateOfficeSpaceInput {
  @Field((type) => ID)
  officeId: ObjectId;

  @Field((type) => String)
  name: string;

  @Field((type) => CreateRatingInput)
  rating: CreateRatingInput;

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

  @Field((type) => UpdateRatingInput)
  rating: UpdateRatingInput;

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
