export class CreateInvoiceDto {
  invoice_number: number;

  total: number;

  currency: string;

  invoice_date: Date;

  due_date: Date;

  vendor_name: string;

  remittance_address: string;
}
