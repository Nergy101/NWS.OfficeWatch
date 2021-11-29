import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { CreateCountryInput } from 'src/model/country/country.inputs';
import { Country, CountryDocument } from 'src/model/country/country.model';
import { CountryService } from 'src/resolvers/country/country.service';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private countryService: CountryService) {}

  @Query(() => Country)
  async country(
    @Args('countryId', { type: () => ID }) countryId: ObjectId,
  ): Promise<CountryDocument | null> {
    return this.countryService.getById(countryId);
  }

  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return this.countryService.findAll();
  }

  @Mutation(() => Country, { description: 'Creates posted Country' })
  async createCountry(
    @Args('createdCountry') createdCountry: CreateCountryInput,
  ): Promise<CountryDocument> {
    return this.countryService.create(createdCountry);
  }
}
