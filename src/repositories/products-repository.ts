import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/product.dto';
import { Product } from '@prisma/client';

export abstract class ProductRepository {
  abstract create(ProductInfo: CreateProductDTO): Promise<Product | null>;
  abstract read(id: string): Promise<Product | null>;
  abstract update(
    id: string,
    ProductInfo: UpdateProductDTO,
  ): Promise<Product | null>;
  abstract delete(id: string): Promise<Product | null>;
  abstract findByTitle(title: string): Promise<Product | null>;
  abstract findAll(): Promise<Product[]>;
}
