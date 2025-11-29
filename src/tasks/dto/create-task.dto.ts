import { IsString, IsOptional, IsDateString, IsNumber, IsEnum } from 'class-validator';
import { TaskStatus } from '../schemas/task.schema';

/**
 * DTO utilisé lors de la création d’une tâche.
 * Il définit la forme des données attendues par l'API
 * et applique des règles de validation grâce à class-validator.
 */
export class CreateTaskDto {

  /**
   * Titre de la tâche.
   * - Obligatoire
   * - Doit être une chaîne de caractères
   */
  @IsString()
  title: string;

  /**
   * Description de la tâche.
   * - Optionnelle
   * - Texte libre
   */
  @IsOptional()
  @IsString()
  description?: string;

  /**
   * Date de début de la tâche.
   * - Optionnelle
   * - Doit être une date valide (format ISO 8601)
   *   Exemple : "2025-01-20T12:30:00Z"
   */
  @IsOptional()
  @IsDateString()
  startDate?: string;

  /**
   * Date de fin de la tâche.
   * - Optionnelle
   * - Doit être une date valide
   */
  @IsOptional()
  @IsDateString()
  endDate?: string;

  /**
   * Durée estimée de la tâche (en heures, minutes, etc.).
   * - Optionnelle
   * - Doit être un nombre
   */
  @IsOptional()
  @IsNumber()
  duration?: number;

  /**
   * Personne responsable de la tâche.
   * - Optionnelle
   * - Chaîne de caractères
   */
  @IsOptional()
  @IsString()
  responsible?: string;

  /**
   * Statut actuel de la tâche.
   * - Optionnel
   * - Doit correspondre à l’un des statuts définis dans l’énum TaskStatus
   *   (ex. "to do", "in progress", "done")
   */
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
