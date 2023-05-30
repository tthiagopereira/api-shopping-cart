import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateShoppingCartDto {
  @IsString()
  userId: string;

  @IsNumber()
  @IsOptional()
  totalPrice: number;

  @IsNumber()
  @IsOptional()
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
