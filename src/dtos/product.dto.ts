import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  thumbnail: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  brand: string;
}

export class UpdateProductDTO {
  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsString()
  thumbnail: string;

  @IsString()
  category: string;

  @IsNumber()
  stock: number;

  @IsString()
  description: string;

  @IsString()
  brand: string;
}
