import { IsString, IsEnum, IsDate } from 'class-validator';

export enum passion {
  'Low',
  'Medium',
  'High',
  'Very-High',
}

export class CreateHobbiesDto {

  @IsString()
  @IsEnum(passion)
  public passionLevel: string;

  @IsString()
  public name: string;

  @IsDate()
  public year: Date;

  @IsString()
  public user: string;
}
