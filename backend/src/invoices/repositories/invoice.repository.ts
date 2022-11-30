import { Logger, UnprocessableEntityException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { InvoiceDto } from '../dtos/response/invoice.dto';
import { Invoice } from '../entities/invoice.entity';
import { plainToClass } from 'class-transformer';

@EntityRepository(Invoice)
export class InvoiceRepository extends Repository<Invoice> {
  private readonly logger: Logger;

  constructor() {
    super();
    this.logger = new Logger(InvoiceRepository.name);
  }

  async getAll(status: string): Promise<InvoiceDto[]> {
    try {
      const pendingInvoices = await this.find({ where: { status } });

      return plainToClass(InvoiceDto, pendingInvoices);
    } catch (error) {
      this.logger.error(error);

      throw new UnprocessableEntityException(error);
    }
  }
}
