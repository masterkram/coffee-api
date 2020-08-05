import { IsString } from "class-validator";

export class RoastMethodDTO {
  @IsString()
  name: string;
}
