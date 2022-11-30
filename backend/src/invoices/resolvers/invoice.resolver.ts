import { Resolver, Query, Args } from '@nestjs/graphql';
import { InvoiceModel } from '../dtos/model/invoice.model';
import { Invoice } from '../entities/invoice.entity';
import { InvoiceService } from '../services/invoice.service';

@Resolver(Invoice)
export class InvoiceResolver {
  constructor(private invoiceService: InvoiceService) {}

  @Query(() => [InvoiceModel], { name: 'getAllInvoices' })
  async getAllInvoices(
    @Args('status') status: string,
  ): Promise<InvoiceModel[]> {
    return this.invoiceService.getAll(status);
  }
}
