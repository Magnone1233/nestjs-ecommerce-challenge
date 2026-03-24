import { IsNumber, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateInventoryDto {
  @IsNumber()
  @IsNotEmpty()
  productVariationId: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  quantity: number;

  @IsNotEmpty()
  countryCode: string;
}

export class UpdateInventoryDto {
  @IsNumber()
  @IsPositive()
  quantity?: number;
}
