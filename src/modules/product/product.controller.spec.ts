import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from 'src/repositories/prisma/products-repository';
import { CreateProductDTO, UpdateProductDTO } from '../../dtos/product.dto';
import { Product } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = {
      findAll: jest.fn(),
      create: jest.fn(),
      read: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      decreaseStock: jest.fn(),
    } as any;

    productService = new ProductService(productRepository);
    productController = new ProductController(productService);
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = [
        {
          id: uuidv4(),
          title: 'Product 1',
          price: 100,
          thumbnail: 'thumbnail1.jpg',
          category: 'Category 1',
          stock: 10,
          description: 'Description 1',
          brand: 'Brand 1',
        },
      ];

      jest.spyOn(productService, 'findAll').mockResolvedValue(result);

      expect(await productController.readAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should create and return a product', async () => {
      const createProductDTO: CreateProductDTO = {
        title: 'Product 1',
        price: 100,
        thumbnail: 'thumbnail1.jpg',
        category: 'Category 1',
        stock: 10,
        description: 'Description 1',
        brand: 'Brand 1',
      };
      const result: Product = { id: uuidv4(), ...createProductDTO };

      jest.spyOn(productService, 'create').mockResolvedValue(result);

      expect(await productController.create(createProductDTO)).toBe(result);
    });
  });

  describe('readOne', () => {
    it('should return a single product', async () => {
      const id = uuidv4();
      const result: Product = {
        id,
        title: 'Product 1',
        price: 100,
        thumbnail: 'thumbnail1.jpg',
        category: 'Category 1',
        stock: 10,
        description: 'Description 1',
        brand: 'Brand 1',
      };

      jest.spyOn(productService, 'read').mockResolvedValue(result);

      expect(await productController.readOne(id)).toBe(result);
    });
  });

  describe('update', () => {
    it('should update and return the updated product', async () => {
      const id = uuidv4();
      const updateProductDTO: UpdateProductDTO = {
        title: 'Updated Product',
        price: 150,
        thumbnail: 'updated_thumbnail.jpg',
        category: 'Updated Category',
        stock: 5,
        description: 'Updated Description',
        brand: 'Updated Brand',
      };
      const result: Product = { id, ...updateProductDTO };

      jest.spyOn(productService, 'update').mockResolvedValue(result);

      expect(await productController.update(id, updateProductDTO)).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete the product and return undefined', async () => {
      const id = uuidv4();

      jest.spyOn(productService, 'delete').mockResolvedValue(undefined);

      expect(await productController.delete(id)).toBe(undefined);
    });
  });

  describe('decreaseStock', () => {
    it('should decrease the stock of the product and return the updated product', async () => {
      const id = uuidv4();
      const result: Product = {
        id,
        title: 'Product 1',
        price: 100,
        thumbnail: 'thumbnail1.jpg',
        category: 'Category 1',
        stock: 9,
        description: 'Description 1',
        brand: 'Brand 1',
      };

      jest.spyOn(productService, 'decreaseStock').mockResolvedValue(result);

      expect(await productController.decreaseStock(id)).toBe(result);
    });
  });
});
