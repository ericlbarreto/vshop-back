import { ProductDTO } from 'src/modules/product/product.dto';

export abstract class ProductRepository {
  abstract create(ProductInfo: ProductDTO): Promise<void>;
}
