import { Field, Float, InputType } from '@nestjs/graphql';

@InputType({ description: 'An office-space rating entity' })
export class CreateRatingInput {
  @Field((type) => Float, { nullable: true })
  officeSpaceRating?: number;

  @Field((type) => Float, { nullable: true })
  cateringRating?: number;

  @Field((type) => Float, { nullable: true })
  locationRating?: number;

  @Field((type) => Float, { nullable: true })
  friendlynessRating?: number;

  @Field((type) => Float, { nullable: true })
  sustainabilityRating?: number;
}

@InputType({ description: 'An office-space rating update model' })
export class UpdateRatingInput {
  @Field((type) => Float, { nullable: true })
  officeSpaceRating?: number;

  @Field((type) => Float, { nullable: true })
  cateringRating?: number;

  @Field((type) => Float, { nullable: true })
  locationRating?: number;

  @Field((type) => Float, { nullable: true })
  friendlynessRating?: number;

  @Field((type) => Float, { nullable: true })
  sustainabilityRating?: number;
}
