import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from '../pub-sub/pub-sub.module';
import { InvoiceController } from './controllers/invoice.controller';
import { InvoiceRepository } from './repositories/invoice.repository';
import { InvoiceResolver } from './resolvers/invoice.resolver';
import { InvoiceService } from './services/invoice.service';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceRepository]), PubSubModule],
  controllers: [InvoiceController],
  providers: [InvoiceService, InvoiceResolver],
  exports: [InvoiceService],
})
export class InvoiceModule {}
