import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('category_product')
export class Auth {
  @PrimaryColumn()
  categoryId: number;

  @Column()
  name: string;

  @Column()
  categoryStatus: boolean;
}
