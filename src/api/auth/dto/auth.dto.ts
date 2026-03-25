import { IsNotEmpty } from 'class-validator';

export class PayloadDto {
  @IsNotEmpty()
  public email: string;

  @IsNotEmpty()
  public id: number;

  @IsNotEmpty()
  public roleIds: number[];
}
