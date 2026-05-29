import { IsString, IsNumber, IsOptional, IsEnum, IsArray } from 'class-validator';

export class CreateReportDto {
  @IsEnum(['user', 'camera'])
  type: string;

  @IsString()
  source: string;

  @IsArray()
  @IsNumber({}, { each: true })
  coordinates: number[];

  @IsString()
  imageUrl: string;

  @IsOptional()
  @IsNumber()
  waterLevel?: number;

  @IsOptional()
  @IsNumber()
  confidence?: number;
}

export class QueryReportsDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;

  @IsOptional()
  @IsNumber()
  radius?: number = 5000;

  @IsOptional()
  @IsNumber()
  hours?: number = 24;
}
