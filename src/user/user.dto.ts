import { IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  username: string;

  @IsString()
  password: string;
}