import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ProductRepository } from '../../repositories/prisma/products-repository';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/product.dto';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductInfo: CreateProductDTO): Promise<Product> {
    const alreadyExists = await this.productRepository.findByTitle(
      createProductInfo.title,
    );

    if (alreadyExists) {
      throw new BadRequestException(
        'This product is already registered in our database.',
      );
    }

    const createdProduct =
      await this.productRepository.create(createProductInfo);

    if (!createdProduct) {
      throw new InternalServerErrorException('Error at creating product');
    }

    return createdProduct;
  }

  async read(id: string): Promise<Product | null> {
    const product = await this.productRepository.read(id);

    if (!product) {
      throw new NotFoundException('Product not found.');
    }

    return product;
  }

  async update(
    id: string,
    updateProductInfo: UpdateProductDTO,
  ): Promise<Product | null> {
    const product = await this.productRepository.read(id);

    if (!product) {
      throw new NotFoundException('Product not found.');
    }

    const updatedProduct = await this.productRepository.update(
      id,
      updateProductInfo,
    );

    if (!updatedProduct) {
      throw new BadRequestException('Error at updating product.');
    }

    return updatedProduct;
  }

  async delete(id: string): Promise<Product | null> {
    const product = await this.productRepository.read(id);

    if (!product) {
      throw new NotFoundException('Product not found.');
    }

    const deletedProduct = await this.productRepository.delete(id);

    if (!deletedProduct) {
      throw new InternalServerErrorException('Error at deleting product.');
    }

    return deletedProduct;
  }

  async findAll(): Promise<Product[]> {
    try {
      const products = await this.productRepository.findAll();
      return products;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async decreaseStock(id: string): Promise<Product> {
    const product = await this.productRepository.read(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    if (product.stock <= 0) {
      throw new BadRequestException('No stock available');
    }

    return this.productRepository.decreaseStock(id);
  }
}
