import { IsString, IsOptional, IsDateString, IsNumber, IsEnum } from 'class-validator';
import { TaskStatus } from '../schemas/task.schema';

/**
DTO utilisé lors de la création d’une tâche.
Il définit la forme des données attendues par l'API et applique des règles de validation grâce à class-validator.
*/
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

  /**
  Statut actuel de la tâche doit correspondre à l’un des statuts définis dans l’énum TaskStatus(ex. "to do", "in progress", "done")
   */
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
