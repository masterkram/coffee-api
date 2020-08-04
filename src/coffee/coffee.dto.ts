import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CoffeeDTO {
  @IsString()
  @ApiProperty({type: String})
  name: string;
}