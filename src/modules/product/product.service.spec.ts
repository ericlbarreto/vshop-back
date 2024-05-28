import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '@prisma/client';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/product.dto';
import { ProductRepository } from '../../repositories/prisma/products-repository';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let productService: ProductService;
  let productRepository: ProductRepository;

  beforeEach(async () => {
    const mockProductRepository = {
      create: jest.fn(),
      findByTitle: jest.fn(),
      read: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      findAll: jest.fn(),
      decreaseStock: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: ProductRepository,
          useValue: mockProductRepository,
        },
      ],
    }).compile();

    productService = module.get<ProductService>(ProductService);
    productRepository = module.get<ProductRepository>(ProductRepository);
  });

  it('should be defined', () => {
    expect(productService).toBeDefined();
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
      const product: Product = { id: 'uuid', ...createProductDTO };

      jest.spyOn(productRepository, 'findByTitle').mockResolvedValue(null);
      jest.spyOn(productRepository, 'create').mockResolvedValue(product);

      expect(await productService.create(createProductDTO)).toBe(product);
    });
  });

  describe('read', () => {
    it('should return a product', async () => {
      const product: Product = {
        id: 'uuid',
        title: 'Product 1',
        price: 100,
        thumbnail: 'thumbnail1.jpg',
        category: 'Category 1',
        stock: 10,
        description: 'Description 1',
        brand: 'Brand 1',
      };

      jest.spyOn(productRepository, 'read').mockResolvedValue(product);

      expect(await productService.read('uuid')).toBe(product);
    });
  });

  describe('update', () => {
    it('should update and return the product', async () => {
      const updateProductDTO: UpdateProductDTO = {
        title: 'Updated Product',
        price: 150,
        thumbnail: 'updated_thumbnail.jpg',
        category: 'Updated Category',
        stock: 5,
        description: 'Updated Description',
        brand: 'Updated Brand',
      };
      const product: Product = { id: 'uuid', ...updateProductDTO };

      jest.spyOn(productRepository, 'read').mockResolvedValue(product);
      jest.spyOn(productRepository, 'update').mockResolvedValue(product);

      expect(await productService.update('uuid', updateProductDTO)).toBe(
        product,
      );
    });
  });

  describe('delete', () => {
    it('should delete and return the product', async () => {
      const product: Product = {
        id: 'uuid',
        title: 'Product 1',
        price: 100,
        thumbnail: 'thumbnail1.jpg',
        category: 'Category 1',
        stock: 10,
        description: 'Description 1',
        brand: 'Brand 1',
      };

      jest.spyOn(productRepository, 'read').mockResolvedValue(product);
      jest.spyOn(productRepository, 'delete').mockResolvedValue(product);

      expect(await productService.delete('uuid')).toBe(product);
    });
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const products: Product[] = [
        {
          id: 'uuid1',
          title: 'Product 1',
          price: 100,
          thumbnail: 'thumbnail1.jpg',
          category: 'Category 1',
          stock: 10,
          description: 'Description 1',
          brand: 'Brand 1',
        },
        {
          id: 'uuid2',
          title: 'Product 2',
          price: 150,
          thumbnail: 'thumbnail2.jpg',
          category: 'Category 2',
          stock: 5,
          description: 'Description 2',
          brand: 'Brand 2',
        },
      ];

      jest.spyOn(productRepository, 'findAll').mockResolvedValue(products);

      expect(await productService.findAll()).toBe(products);
    });
  });

  describe('decreaseStock', () => {
    it('should decrease the stock of the product and return the updated product', async () => {
      const product: Product = {
        id: 'uuid',
        title: 'Product 1',
        price: 100,
        thumbnail: 'thumbnail1.jpg',
        category: 'Category 1',
        stock: 10,
        description: 'Description 1',
        brand: 'Brand 1',
      };
      const updatedProduct: Product = { ...product, stock: product.stock - 1 };

      jest.spyOn(productRepository, 'read').mockResolvedValue(product);
      jest
        .spyOn(productRepository, 'decreaseStock')
        .mockResolvedValue(updatedProduct);

      expect(await productService.decreaseStock('uuid')).toBe(updatedProduct);
    });
  });
});
