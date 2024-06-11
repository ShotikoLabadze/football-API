import { IsInt, IsString } from 'class-validator';

export class CreateMatchDto {
  @IsInt()
  homeTeamId: number;

  @IsInt()
  awayTeamId: number;

  @IsString()
  date: string;

  @IsString()
  venue: string;

  @IsString()
  score: string;

  @IsString()
  highlights: string;
}
