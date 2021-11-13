import { Injectable } from '@nestjs/common';
import { Address } from 'src/model/address.model';

@Injectable()
export class AddressService {
  private readonly addresses: Address[] = [
    {
      addressId: '1',
      postal: '2222AB',
      streetName: 'FirstStreet',
      streetNumber: 12,
      city: 'Edmonton',
      area: 'Alberta',
      countryId: '2',
    },
    {
      addressId: '2',
      postal: '1111AB',
      streetName: 'SecondStreet',
      streetNumber: 24,
      city: 'Utrecht',
      area: 'Utrecht',
      countryId: '1',
    },
  ];

  create(address: Address) {
    this.addresses.push(address);
  }

  findOneById(addressId: string): Address | undefined {
    const addresses = this.addresses.filter((o) => o.addressId === addressId);
    if (addresses.length > 0) {
      return addresses[0];
    }
    return undefined;
  }

  findAll(): Address[] {
    return this.addresses;
  }
}
