import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
Type qui combine le modèle Task avec les propriétés MongoDB.
Il permet d'avoir l'autocomplétion et les types corrects lorsqu'on manipule les documents dans les services Nest.
 */
export type TaskDocument = Task & Document;

/**
Liste des statuts possibles pour une tâche.
Utilisé à la fois dans le schéma et dans les DTO.
 */
export enum TaskStatus {
  TODO = 'to do',
  IN_PROGRESS = 'in progress',
  DONE = 'done',
}

/**
Définition du schéma Task pour MongoDB avec Mongoose.
Le décorateur @Schema crée une collection MongoDB avec : les propriétés définies ci-dessous timestamps automatiques (createdAt, updatedAt)
 */
@Schema({ timestamps: true })
export class Task {
  /**
  Titre de la tâche Obligatoire
   */
  @Prop({ required: true })
  title: string;

  /**
  Description optionnelle de la tâche
   */
  @Prop()
  description: string;

  /**
  Date de début
  Stockée en type Date dans MongoDB
   */
  @Prop({ type: Date })
  startDate: Date;

  /**
  Date de fin
   */
  @Prop({ type: Date })
  endDate: Date;

  /**
  Durée estimée de la tâche (heures, minutes, etc.)
   */
  @Prop()
  duration: number;

  /**
  Personne responsable de la tâche
   */
  @Prop()
  responsible: string;

  /**
  Statut de la tâche
  TODO
  IN_PROGRESS
  DONE
  Valeur par défaut : TODO
   */
  @Prop({ enum: TaskStatus, default: TaskStatus.TODO })
  status: TaskStatus;
}

/**
Génère automatiquement le schéma Mongoose basé sur la classe Task.
On l'utilise ensuite dans MongooseModule.forFeature(...) dans le module.
 */
export const TaskSchema = SchemaFactory.createForClass(Task);
