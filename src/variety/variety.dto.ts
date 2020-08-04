import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VarietyDTO {
  @IsString()
  @ApiProperty({ type: String, description: 'name' })
  name: string;
}
