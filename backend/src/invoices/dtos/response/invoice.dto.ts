export class InvoiceDto {
  uuid: string;

  invoice_number: number;

  total: number;

  currency: string;

  invoice_date: string;

  due_date: string;

  vendor_name: string;

  remittance_address: string;
}
