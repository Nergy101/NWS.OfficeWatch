import { Injectable } from '@nestjs/common';
import { Office } from 'src/model/office/office.model';

@Injectable()
export class OfficeService {
  private readonly offices: Office[] = [
    {
      officeId: '1',
      name: 'test',
      createdAt: new Date('12-12-2021'),
      creatorId: '1',
      addressId: '1',
    },
  ];

  create(office: Office) {
    this.offices.push(office);
  }

  findOneById(officeId: string): Office | undefined {
    const office = this.offices.filter((o) => o.officeId === officeId);
    if (office.length > 0) {
      return office[0];
    }
    return undefined;
  }

  findAll(): Office[] {
    return this.offices;
  }
}
