import {
  Field,
  Float,
  GraphQLISODateTime,
  ID,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class InvoiceModel {
  @Field(() => ID)
  readonly uuid: string;

  @Field()
  readonly invoice_number: number;

  @Field(() => Float)
  readonly total: number;

  @Field()
  readonly currency: string;

  @Field(() => GraphQLISODateTime)
  readonly invoice_date: string;

  @Field(() => GraphQLISODateTime)
  readonly due_date: string;

  @Field()
  readonly vendor_name: string;

  @Field()
  readonly remittance_address: string;
}
