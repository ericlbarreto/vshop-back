import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDTO {
  @ApiProperty({
    description: 'The title is used to be displayed on the product',
    example: 'Iphone 13 Pro Max',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The price is used to be displayed on the product',
    example: '998.99',
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'The thumbnail is used to be the product image',
    example:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPTQ3_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1666124675543',
  })
  @IsNotEmpty()
  @IsString()
  thumbnail: string;

  @ApiProperty({
    description: 'The category is used to be displayed on the product',
    example: 'smartphones',
  })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({
    description: 'The stock is used to count the product stock',
    example: '78',
  })
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @ApiProperty({
    description: 'The description is used to be displayed on the product',
    example:
      'Iphone 13 Pro Max is the best smarthphone in the world, with 219 features.',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The brand is used to be displayed on the product',
    example: 'Apple',
  })
  @IsNotEmpty()
  @IsString()
  brand: string;
}

export class UpdateProductDTO {
  @ApiProperty({
    description: 'The title is used to be displayed on the product',
    example: 'Iphone 13 Pro Max',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The price is used to be displayed on the product',
    example: '998.99',
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'The thumbnail is used to be the product image',
    example:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPTQ3_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1666124675543',
  })
  @IsString()
  thumbnail: string;

  @ApiProperty({
    description: 'The category is used to be displayed on the product',
    example: 'smartphones',
  })
  @IsString()
  category: string;

  @ApiProperty({
    description: 'The stock is used to count the product stock',
    example: '78',
  })
  @IsNumber()
  stock: number;

  @ApiProperty({
    description: 'The description is used to be displayed on the product',
    example:
      'Iphone 13 Pro Max is the best smarthphone in the world, with 219 features.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The brand is used to be displayed on the product',
    example: 'Apple',
  })
  @IsString()
  brand: string;
}
