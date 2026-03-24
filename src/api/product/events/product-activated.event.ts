import { Product } from 'src/database/entities/product.entity';

export class ProductActivatedEvent {
  constructor(
    public readonly product: Product,
    public readonly merchantId: number,
  ) {}
}
