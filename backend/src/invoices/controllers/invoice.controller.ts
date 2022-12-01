import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { PUB_SUB } from '../../pub-sub/pub-sub.module';
import { CreateInvoiceDto } from '../dtos/input/create-invoice.dto';
import { InvoiceService } from '../services/invoice.service';
import { MessageResponse } from '../types/messageResponse.type';

@Controller('invoice')
export class InvoiceController {
  constructor(
    private invoiceService: InvoiceService,
    @Inject(PUB_SUB) private pubSub: PubSub,
  ) {}

  @Post()
  @HttpCode(200)
  async create(@Body() input: CreateInvoiceDto): Promise<MessageResponse> {
    const invoice = await this.invoiceService.create(input);

    this.pubSub.publish('invoiceCreated', {
      invoiceCreated: invoice,
    });

    return { message: 'invoice submitted successfully' };
  }
}
