import { IsArray, IsInt, IsString } from 'class-validator';
import { CreatePlayerDto } from 'src/players/dto/create-player.dto';

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsString()
  city: string;

  @IsString()
  stadiumName: string;

  @IsInt()
  establishedYear: number;

  @IsArray()
  players: CreatePlayerDto[];
}
