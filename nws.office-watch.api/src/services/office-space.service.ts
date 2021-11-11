import { Injectable } from '@nestjs/common';
import { OfficeSpace } from 'src/model/office-space.model';

@Injectable()
export class OfficeSpaceService {
  private readonly officeSpaces: OfficeSpace[] = [
    {
      officeSpaceId: '1',
      officeId: '1',
      availableFrom: new Date('01-01-2021'),
      availableUntil: new Date('12-01-2021'),
      forAmountOfPeople: 2,
      price: 25.5,
      rating: 3.7,
      name: 'Bamboo',
      booked: false,
    },
  ];

  create(space: OfficeSpace) {
    this.officeSpaces.push(space);
  }

  findOneById(officeSpaceId: string): OfficeSpace | undefined {
    const officeSpaces = this.officeSpaces.filter(
      (os) => os.officeSpaceId === officeSpaceId,
    );
    if (officeSpaces.length > 0) {
      return officeSpaces[0];
    }
    return undefined;
  }

  findAllByOfficeId(officeId: string): OfficeSpace[] {
    return this.officeSpaces.filter((os) => os.officeId === officeId);
  }

  findAll(): OfficeSpace[] {
    return this.officeSpaces;
  }
}
