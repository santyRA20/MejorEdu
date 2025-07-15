import { IsInt, IsString, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

export class OptionDto {
  @IsString()
  text: string;

  correct: boolean;
}

export class CreateQuestionDto {
  @IsString()
  text: string;

  @IsInt()
  presentationId: number;

  @ValidateNested({ each: true })
  @Type(() => OptionDto)
  @ArrayMinSize(2)
  options: OptionDto[];
}
