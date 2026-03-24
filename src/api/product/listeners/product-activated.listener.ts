import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ProductActivatedEvent } from '../events/product-activated.event';

@Injectable()
export class ProductActivatedListener {
  private readonly logger = new Logger(ProductActivatedListener.name);

  @OnEvent('product.activated')
  async handleProductActivated(event: ProductActivatedEvent) {
    this.logger.log(
      `Product activated: ID ${event.product.id}, Merchant ID: ${event.merchantId}`,
    );
  }
}
