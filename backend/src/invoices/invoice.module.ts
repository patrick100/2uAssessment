import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceController } from './controllers/invoice.controller';
import { InvoiceRepository } from './repositories/invoice.repository';
import { InvoiceResolver } from './resolvers/invoice.resolver';
import { InvoiceService } from './services/invoice.service';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceRepository])],
  controllers: [InvoiceController],
  providers: [InvoiceService, InvoiceResolver],
  exports: [InvoiceService],
})
export class InvoiceModule {}
