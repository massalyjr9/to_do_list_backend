import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

/**
 * DTO utilisé pour mettre à jour une tâche existante.
 Il hérite automatiquement du CreateTaskDto : mêmes propriétés, mêmes règles de validation
 PartialType() transforme toutes les propriétés en optionnelles, ce qui est logique pour une mise à jour : le client peut modifier uniquement certains champs.
 */
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
