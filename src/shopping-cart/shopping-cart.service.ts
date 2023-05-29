import { Inject, Injectable } from '@nestjs/common';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { Repository } from 'typeorm';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectRepository(ShoppingCart)
    private readonly repository: Repository<ShoppingCart>,
  ) {}
  async create(createShoppingCartDto: CreateShoppingCartDto) {
    return this.repository.find();
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} shoppingCart`;
  }

  async update(id: number, updateShoppingCartDto: UpdateShoppingCartDto) {
    return `This action updates a #${id} shoppingCart`;
  }

  async remove(id: number) {
    return `This action removes a #${id} shoppingCart`;
  }
}
