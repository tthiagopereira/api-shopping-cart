import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateShoppingCartDto {
  // @IsString()
  // shoppingCartId: string;

  @IsString()
  userId: string;

  @IsNumber()
  totalPrice: number;

  @IsNumber()
  totalQuantity: number;

  @IsArray()
  products: Product[];
}

export class Product {
  @IsString()
  productId: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;
}
