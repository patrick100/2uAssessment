import {
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateInvoiceDto } from '../dtos/input/create-invoice.dto';
import { InvoiceDto } from '../dtos/response/invoice.dto';
import { Invoice } from '../entities/invoice.entity';
import { InvoiceRepository } from '../repositories/invoice.repository';
import { MessageResponse } from '../types/messageResponse.type';

@Injectable()
export class InvoiceService {
  private readonly logger: Logger;

  constructor(
    @InjectRepository(InvoiceRepository)
    private invoiceRepository: InvoiceRepository,
  ) {}

  async create(input: CreateInvoiceDto): Promise<InvoiceDto> {
    try {
      const invoice = await this.invoiceRepository.save(input);

      return plainToClass(InvoiceDto, {
        ...invoice,
        due_date: new Date(invoice.due_date),
        invoice_date: new Date(invoice.due_date),
      });
    } catch (error) {
      this.logger.error(error);

      throw new UnprocessableEntityException(error);
    }
  }

  async getAll(status: string): Promise<InvoiceDto[]> {
    return this.invoiceRepository.getAll(status);
  }
}
