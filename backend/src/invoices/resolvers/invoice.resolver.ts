import { Inject } from '@nestjs/common';
import {
  Resolver,
  Query,
  Args,
  Subscription,
  Mutation,
  ID,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { PUB_SUB } from '../../pub-sub/pub-sub.module';
import { InvoiceModel } from '../dtos/model/invoice.model';
import { InvoiceService } from '../services/invoice.service';

@Resolver(InvoiceModel)
export class InvoiceResolver {
  constructor(
    private invoiceService: InvoiceService,
    @Inject(PUB_SUB) private pubSub: PubSub,
  ) {}

  @Query(() => [InvoiceModel], { name: 'getAllInvoices' })
  async getAllInvoices(
    @Args('status') status: string,
  ): Promise<InvoiceModel[]> {
    return this.invoiceService.getAll(status);
  }

  @Mutation(() => InvoiceModel, { name: 'updateInvoice' })
  async updateInvoice(
    @Args('uuid', { type: () => ID }) uuid: string,
  ): Promise<InvoiceModel> {
    return this.invoiceService.update(uuid);
  }

  @Subscription((returns) => InvoiceModel)
  invoiceCreated() {
    return this.pubSub.asyncIterator('invoiceCreated');
  }
}
