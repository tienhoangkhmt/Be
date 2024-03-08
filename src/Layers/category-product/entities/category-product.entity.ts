import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category_product')
export class CategoryProduct {
  @PrimaryGeneratedColumn()
  categoryId: number;

  @Column()
  name: string;

  @Column({ default: true })
  categoryStatus: boolean;
}
