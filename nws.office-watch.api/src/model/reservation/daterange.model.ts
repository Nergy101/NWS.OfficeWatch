import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'A reservation entity' })
export class DateRange {
  @Field()
  fromDateUtc: Date;
  @Field()
  toDateUtc: Date;
}
