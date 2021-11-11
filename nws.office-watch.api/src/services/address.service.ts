import { Injectable } from '@nestjs/common';
import { Address } from 'src/model/address.model';

@Injectable()
export class AddressService {
  private readonly addresses: Address[] = [];

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
