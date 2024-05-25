import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/repositories/products-repository';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/product.dto';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductInfo: CreateProductDTO) {
    try {
      const alreadyExists = await this.productRepository.findByTitle(
        createProductInfo.title,
      );

      if (alreadyExists) {
        throw new Error('This product is already registered in our database.');
      }

      const createdProduct =
        await this.productRepository.create(createProductInfo);

      if (!createdProduct) {
        throw new Error('Error at product creating');
      }

      return createdProduct;
    } catch (error) {
      throw new Error(error);
    }
  }

  async read(id: string): Promise<Product | null> {
    try {
      const product = await this.productRepository.read(id);

      if (!product) {
        throw new Error('Product not found.');
      }

      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(
    id: string,
    updateProductInfo: UpdateProductDTO,
  ): Promise<Product | null> {
    try {
      const product = await this.productRepository.read(id);

      if (!product) {
        throw new Error('Product not found.');
      }

      const updatedProduct = await this.productRepository.update(
        id,
        updateProductInfo,
      );

      if (!updatedProduct) {
        throw new Error('Error at updating product.');
      }

      return updatedProduct;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<Product | null> {
    try {
      const product = await this.productRepository.read(id);

      if (!product) {
        throw new Error('Product not found.');
      }

      const deletedProduct = await this.productRepository.delete(id);

      if (!deletedProduct) {
        throw new Error('Error at deleting product.');
      }

      return deletedProduct;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      const products = await this.productRepository.findAll();

      return products;
    } catch (error) {
      throw new Error(error);
    }
  }
}
