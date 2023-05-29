import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../dto/create-shopping-cart.dto';

@Entity('shopping_cart')
export class ShoppingCart {
  @PrimaryGeneratedColumn()
  shoppingCartId: number;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'total_price' })
  totalPrice: number;

  @Column({ name: 'total_quantity' })
  totalQuantity: number;

  @Column('json', { name: 'products' })
  products: Array<Product>;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
