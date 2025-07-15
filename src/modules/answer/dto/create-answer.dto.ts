import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsInt()
  questionId: number;

  @IsOptional()
  @IsString()
  textAnswer?: string;

  @IsOptional()
  @IsInt()
  scaleAnswer?: number;
}
