import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Country } from 'src/model/country/country.model';
import { CountryService } from 'src/resolvers/country/country.service';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private countryService: CountryService) {}

  @Query(() => Country)
  async country(@Args('countryId', { type: () => ID }) countryId: string) {
    return this.countryService.findOneById(countryId);
  }

  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return this.countryService.findAll();
  }
}
