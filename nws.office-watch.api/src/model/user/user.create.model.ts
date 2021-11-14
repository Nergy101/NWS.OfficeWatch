import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {
  @Field()
  birthday: Date;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field()
  lastName: string;

  @Field()
  emailAddress: string;

  @Field({ defaultValue: false })
  lockedOut: boolean;

  @Field({ nullable: true })
  lockedUntil?: Date;
}
