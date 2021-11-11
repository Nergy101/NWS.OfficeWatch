import { ObjectType, Field, ID } from '@nestjs/graphql';
import { OfficeSpace } from './office-space.model';

@ObjectType({ description: 'An office entity' })
export class Office {
  @Field((type) => ID, { description: 'Office GUID' })
  officeId: string;

  @Field({ description: 'Company name' })
  name: string;
  @Field()
  createdAt: Date;

  @Field((type) => ID)
  creatorId: string;

  @Field((type) => ID)
  addressId: string;

  @Field((type) => [OfficeSpace], { nullable: true })
  officeSpaces?: OfficeSpace[];
}
