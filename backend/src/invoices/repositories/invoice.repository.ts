import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Invoice } from '../entities/invoice.entity';

@EntityRepository(Invoice)
export class InvoiceRepository extends Repository<Invoice> {
  private readonly logger: Logger;

  constructor() {
    super();
    this.logger = new Logger(InvoiceRepository.name);
  }
}
