import { DataSource } from 'typeorm';
import { ShoppingCart } from './entities/shopping-cart.entity';

export const shoppingCcartProviders = [
  {
    provide: 'SHPPING_CART_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ShoppingCart),
    inject: ['DATA_SOURCE'],
  },
];
