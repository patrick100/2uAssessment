import {
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInvoiceDto } from '../dtos/input/create-invoice.dto';
import { InvoiceDto } from '../dtos/response/invoice.dto';
import { InvoiceRepository } from '../repositories/invoice.repository';
import { MessageResponse } from '../types/messageResponse.type';

@Injectable()
export class InvoiceService {
  private readonly logger: Logger;

  constructor(
    @InjectRepository(InvoiceRepository)
    private invoiceRepository: InvoiceRepository,
  ) {}

  async create(input: CreateInvoiceDto): Promise<MessageResponse> {
    try {
      await this.invoiceRepository.save(input);

      return { message: 'invoice submitted successfully' };
    } catch (error) {
      this.logger.error(error);

      throw new UnprocessableEntityException(error);
    }
  }

  async getAll(status: string): Promise<InvoiceDto[]> {
    return this.invoiceRepository.getAll(status);
  }
}
