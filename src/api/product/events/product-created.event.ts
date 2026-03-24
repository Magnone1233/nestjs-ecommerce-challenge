import { Product } from 'src/database/entities/product.entity';

export class ProductCreatedEvent {
  constructor(
    public readonly product: Product,
    public readonly merchantId: number,
  ) {}
}
