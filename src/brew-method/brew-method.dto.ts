import { IsString } from "class-validator";

export class BrewMethodDTO {
  @IsString()
  name: string;
}