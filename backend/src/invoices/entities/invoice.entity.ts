import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class Invoice {
  @Column()
  @Generated('uuid')
  uuid: string;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoice_number: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  total: number;

  @Column()
  currency: string;

  @Column()
  invoice_date: Date;

  @Column()
  due_date: Date;

  @Column()
  vendor_name: string;

  @Column()
  remittance_address: string;

  @Column({ nullable: true, default: 'pending' })
  status: string;
}
