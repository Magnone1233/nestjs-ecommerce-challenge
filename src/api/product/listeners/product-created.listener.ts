import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ProductCreatedEvent } from '../events/product-created.event';

@Injectable()
export class ProductCreatedListener {
  private readonly logger = new Logger(ProductCreatedListener.name);

  @OnEvent('product.created')
  async handleProductCreated(event: ProductCreatedEvent) {
    this.logger.log(
      `Product created: ID ${event.product.id}, Merchant ID: ${event.merchantId}`,
    );
  }
}
