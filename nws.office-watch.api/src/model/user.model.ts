import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Office } from './office.model';
import { Reservation } from './reservation.model';

@ObjectType({ description: 'A user entity' })
export class User {
  @Field((type) => ID)
  userId: string;

  @Field()
  birthday: Date;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field()
  lastName: string;

  @Field()
  emailAddress: string;

  @Field({ defaultValue: false })
  lockedOut: boolean;

  @Field({ nullable: true })
  lockedUntil?: Date;

  @Field(type => ID)
  officeId: string;
  
  @Field((type) => Office, { nullable: true })
  office?: Office;

  @Field((type) => [Reservation], { nullable: true })
  reservations?: Reservation[];
}
