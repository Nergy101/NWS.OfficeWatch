import { ObjectId, Schema as MongooseSchema } from 'mongoose';
import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
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

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  _id: ObjectId;

  @Field({ nullable: true })
  birthday?: Date;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  emailAddress?: string;

  @Field({ defaultValue: false })
  lockedOut?: boolean;

  @Field({ nullable: true })
  lockedUntil?: Date;
}

@InputType()
export class ListUserInput {
  @Field(() => ID)
  _id: ObjectId;

  @Field({ nullable: true })
  birthday?: Date;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  emailAddress?: string;

  @Field({ defaultValue: false })
  lockedOut?: boolean;

  @Field({ nullable: true })
  lockedUntil?: Date;
}