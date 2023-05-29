import { Module } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartController } from './shopping-cart.controller';
import { DatabaseModule } from '../infra/database/database.module';
import { shoppingCcartProviders } from './shopping-cart.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCart } from './entities/shopping-cart.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([ShoppingCart])],
  controllers: [ShoppingCartController],
  providers: [...shoppingCcartProviders, ShoppingCartService],
})
export class ShoppingCartModule {}
