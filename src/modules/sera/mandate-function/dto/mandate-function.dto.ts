import { IsNotEmpty, isNotEmpty, IsNumber, IsPositive } from "class-validator";

export class MandateFunctionDto {
  
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  lotId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  goodId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  lotIdToUdate: number;
}
