import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { PrismaProductsRepository } from '../../repositories/prisma/prisma-products-repository';
import { ProductRepository } from '../../repositories/prisma/products-repository';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    PrismaService,
    ProductService,
    {
      provide: ProductRepository,
      useClass: PrismaProductsRepository,
    },
  ],
})
export class ProductModule {}
