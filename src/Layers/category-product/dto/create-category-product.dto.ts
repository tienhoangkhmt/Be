import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('category_product')
export class CreateCategoryProductDto {
  @PrimaryColumn()
  categoryId?: number;

  @Column()
  name: string;

  @Column()
  categoryStatus: boolean;
}
