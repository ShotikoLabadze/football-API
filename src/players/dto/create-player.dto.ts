import { IsEnum, IsString, IsInt } from 'class-validator';
import { Position } from '../entities/player.entity';
export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsEnum(Position)
  positon: Position;

  @IsInt()
  teamId: number;

  @IsString()
  age: number;

  @IsString()
  nationality: string;

  @IsInt()
  goals: number;

  @IsInt()
  assists: number;
}
