import { Field, ObjectType,  Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType({ description: 'An office-space rating' })
export class Rating {
  @Prop()
  @Field((type) => Float, { nullable: true })
  officeSpaceRating?: number;

  @Prop()
  @Field((type) => Float, { nullable: true })
  cateringRating?: number;

  @Prop()
  @Field((type) => Float, { nullable: true })
  locationRating?: number;

  @Prop()
  @Field((type) => Float, { nullable: true })
  friendlynessRating?: number;

  @Prop()
  @Field((type) => Float, { nullable: true })
  sustainabilityRating?: number;
}

export type RatingDocument = Rating & Document;

export const RatingSchema = SchemaFactory.createForClass(Rating);
