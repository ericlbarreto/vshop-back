import {
  Body,
  Controller,
  Get,
  Put,
  Param,
  Post,
  Delete,
} from '@nestjs/common';
import { Product } from '@prisma/client';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/product.dto';
import { ProductRepository } from 'src/repositories/products-repository';

@Controller('products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async create(@Body() body: CreateProductDTO): Promise<Product> {
    return await this.productRepository.create(body);
  }

  @Get(':id')
  async readOne(@Param('id') id: string): Promise<Product | null> {
    const product = await this.productRepository.read(id);
    return product;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() ProductInfo: UpdateProductDTO) {
    return this.productRepository.update(id, ProductInfo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productRepository.delete(id);
  }

  @Get('all')
  async readAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
}
