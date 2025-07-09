import { IsString, IsInt } from 'class-validator';

export class CreatePresentationDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsInt()
  userId: number;
}
