import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class OfficeCreateInput {
    @Field({ description: 'Company name' })
    name: string;

    @Field({ description: 'Date of Office creation in OfficeWatch', defaultValue: new Date() })
    createdAt: Date;
  
    @Field((type) => ID, { description: 'userId of the user that created this Office'})
    creatorId: string;
  
    @Field((type) => ID)
    addressId: string;
}
