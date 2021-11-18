import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType({ description: 'A reservation entity' })
export class CreateReservationInput {
  @Field((type) => ID)
  officeSpaceId: ObjectId;

  @Field((type) => ID)
  reservedForId: ObjectId;
}