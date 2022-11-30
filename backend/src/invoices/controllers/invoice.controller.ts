import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateInvoiceDto } from '../dtos/input/create-invoice.dto';
import { InvoiceService } from '../services/invoice.service';
import { MessageResponse } from '../types/messageResponse.type';

@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Post()
  @HttpCode(200)
  async create(@Body() input: CreateInvoiceDto): Promise<MessageResponse> {
    return this.invoiceService.create(input);
  }
}
