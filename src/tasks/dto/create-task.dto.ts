import { IsString, IsOptional, IsDateString, IsNumber, IsEnum } from 'class-validator';
import { TaskStatus } from '../schemas/task.schema';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsOptional()
  @IsString()
  responsible?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
