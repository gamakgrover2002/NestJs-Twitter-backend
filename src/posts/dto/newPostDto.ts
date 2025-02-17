import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class newPostDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsEmail()
  @IsNotEmpty()
  readonly createdBy: string;


}
