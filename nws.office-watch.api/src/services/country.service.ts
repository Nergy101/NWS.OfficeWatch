import { Injectable } from '@nestjs/common';
import { Country } from 'src/model/Country.model';

@Injectable()
export class CountryService {
  private readonly countries: Country[] = [
    {
      countryId: '1',
      name: 'the Netherlands',
      iso2Name: 'NL',
      iso3Name: 'NLD',
      continent: 'Europe',
    },
    {
        countryId: '2',
        name: 'Canada',
        iso2Name: 'CA',
        iso3Name: 'CAD',
        continent: 'North America',
    }
  ];

  create(country: Country) {
    this.countries.push(country);
  }

  findOneById(CountryId: string): Country | undefined {
    const Country = this.countries.filter((o) => o.countryId === CountryId);
    if (Country.length > 0) {
      return Country[0];
    }
    return undefined;
  }

  findAll(): Country[] {
    return this.countries;
  }
}
