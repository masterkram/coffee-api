import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @IsString()
  @ApiProperty({type: String})
  email: string;

  @IsString()
  @ApiProperty({type: String})
  password: string;
}