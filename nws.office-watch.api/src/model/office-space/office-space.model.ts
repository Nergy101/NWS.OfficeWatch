import { Field, ObjectType, Int, Float, ID } from '@nestjs/graphql';
import { Reservation } from '../reservation/reservation.model';

@ObjectType({ description: 'An office-space entity' })
export class OfficeSpace {
  @Field((type) => ID)
  officeSpaceId: string;

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

  @Field((type) => ID)
  officeId: string;

  @Field((type) => [Reservation], { nullable: true })
  reservations?: Reservation[];
}
