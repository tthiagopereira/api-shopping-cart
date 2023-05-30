import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateShoppingCartDto, Product } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { Repository } from 'typeorm';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectRepository(ShoppingCart)
    private readonly repository: Repository<ShoppingCart>,
  ) {}
  async create(createShoppingCartDto: CreateShoppingCartDto) {
    const { totalPrice, totalQuantity, products } = await this.calcCart(
      createShoppingCartDto.products,
    );

    const product = new CreateShoppingCartDto();
    product.products = products;
    product.userId = createShoppingCartDto.userId;
    product.totalPrice = totalPrice;
    product.totalQuantity = totalQuantity;

    return this.repository.save(product);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return this.repository.findOne({ where: { shoppingCartId: id } });
  }

  async update(id: number, updateShoppingCartDto: UpdateShoppingCartDto) {
    const { totalPrice, totalQuantity } = await this.calcCart(
      updateShoppingCartDto.products,
    );

    const product = await this.findOne(id);
    product.products = updateShoppingCartDto.products;
    product.userId = updateShoppingCartDto.userId;
    product.totalPrice = totalPrice;
    product.totalQuantity = totalQuantity;

    return this.repository.save(product);
  }

  async remove(id: number) {
    return this.repository.softDelete({ shoppingCartId: id });
  }

  async calcCart(products: Product[]) {
    let totalPrice = 0;
    let totalQuantity = 0;
    const getProducts = [];

    for await (const product of products) {
      const getProduct = await this.getProduct(product.productId);
      totalPrice += getProduct.price * product.quantity;
      totalQuantity += product.quantity;

      getProducts.push({
        productId: getProduct.productId,
        price: getProduct.price,
        quantity: product.quantity,
      });
    }

    return {
      totalPrice,
      totalQuantity,
      products: getProducts,
    };
  }

  async getProduct(codProduct: string) {
    const uri = `http://localhost:3001/api/product/${codProduct}`;
    console.log(uri);
    const { data } = await axios.get(uri, {
      validateStatus: () => true,
    });
    return data;
  }
}
