import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Country } from './country.model';

@ObjectType({ description: 'An address entity' })
export class Address {
  @Field((type) => ID)
  addressId: string;

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

  @Field((type) => Country)
  country: Country;
}
