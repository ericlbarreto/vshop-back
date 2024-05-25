import { PrismaService } from 'src/database/prisma.service';
import { ProductRepository } from '../products-repository';
import { ProductDTO } from 'src/modules/product/product.dto';

export class PrismaProductsRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(ProductInfo: ProductDTO): Promise<void> {
    await this.prisma.product.create({
      data: ProductInfo,
    });
  }
}
