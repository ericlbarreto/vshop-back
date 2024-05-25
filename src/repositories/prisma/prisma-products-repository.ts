import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateProductDTO } from 'src/dtos/product.dto';
import { ProductRepository } from '../products-repository';
import { Product } from '@prisma/client';

@Injectable()
export class PrismaProductsRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(ProductInfo: any): Promise<Product | null> {
    const product = await this.prisma.product.create({
      data: ProductInfo,
    });

    return product;
  }

  async read(id: string): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    return product;
  }

  async update(id: string, ProductInfo: UpdateProductDTO) {
    const product = await this.prisma.product.update({
      where: { id },
      data: ProductInfo,
    });

    return product;
  }

  async delete(id: string): Promise<Product | null> {
    const product = await this.prisma.product.delete({
      where: { id },
    });

    return product;
  }

  async findByTitle(title: string): Promise<Product | null> {
    const product = await this.prisma.product.findFirst({
      where: { title },
    });

    return product;
  }

  async findAll() {
    const products = await this.prisma.product.findMany();

    return products;
  }
}
