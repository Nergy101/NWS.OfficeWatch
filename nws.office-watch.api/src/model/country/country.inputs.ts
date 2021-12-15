import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCountryInput {
  @Field()
  name: string;

  @Field()
  iso2Name: string;

  @Field()
  iso3Name: string;

  @Field()
  continent: string;
}
