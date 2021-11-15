import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'A reservation entity' })
export class Reservation {
  @Field((type) => ID)
  reservationId: string;

  @Field((type) => ID)
  officeSpaceId: string;

  @Field((type) => ID)
  reservedForId: string;
}
