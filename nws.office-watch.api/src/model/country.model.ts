import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ description: 'A country entity' })
export class Country {
  @Field((type) => ID)
  countryId: string;

  @Field()
  name: string;

  @Field()
  iso2Name: string;

  @Field()
  iso3Name: string;

  @Field()
  continent: string;
}
