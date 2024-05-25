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
import { CreateProductDTO, UpdateProductDTO } from '../../dtos/product.dto';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async create(@Body() body: CreateProductDTO): Promise<Product> {
    return await this.productService.create(body);
  }

  @Get(':id')
  async readOne(@Param('id') id: string): Promise<Product | null> {
    const product = await this.productService.read(id);
    return product;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() ProductInfo: UpdateProductDTO) {
    return this.productService.update(id, ProductInfo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }

  @Get()
  async readAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post(':id/decrease')
  async decreaseStock(@Param('id') id: string): Promise<Product | null> {
    return this.productService.decreaseStock(id);
  }
}
