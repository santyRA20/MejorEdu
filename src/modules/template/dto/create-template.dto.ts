import { IsString } from 'class-validator';

export class CreateTemplateDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  content: string;
}
