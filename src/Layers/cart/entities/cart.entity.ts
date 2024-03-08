import { Products } from 'src/Layers/products/entities/product.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Cart extends Products {
  @Column()
  productId: number;

  @Column()
  quantity: number;

  @Column()
  name: string;
}
