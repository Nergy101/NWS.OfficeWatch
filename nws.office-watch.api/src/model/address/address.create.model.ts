import { InputType, Field, Int, ID } from '@nestjs/graphql';

@InputType()
export class AddressCreateInput {
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
  countryId: string;
}
