import { IsString } from "class-validator";

export class CoffeeMixDTO {
  @IsString()
  name: string
}