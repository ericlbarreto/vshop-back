import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaProductsRepository } from 'src/repositories/prisma/prisma-products-repository';
import { ProductRepository } from 'src/repositories/products-repository';
import { ProductService } from './product.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    ProductService,
    {
      provide: ProductRepository,
      useClass: PrismaProductsRepository,
    },
  ],
})
export class AppModule {}
