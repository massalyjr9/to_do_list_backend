import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task, TaskSchema } from './schemas/task.schema';

/**
  Module responsable de tout ce qui concerne les tâches.
  Il regroupe le schéma Mongoose, le service et le contrôleur.
  Ce module suit l’architecture modulaire de NestJS.
*/
@Module({
  // Importation du modèle Task dans le contexte Mongoose
  // Cela permet à TasksService d'injecter et manipuler le modèle
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],

  // Déclaration du contrôleur qui gère les routes /tasks
  controllers: [TasksController],

  // Déclaration du service qui contient la logique métier
  providers: [TasksService],

  // Export du service pour qu'il puisse être utilisé dans d'autres modules si nécessaire
  exports: [TasksService],
})
export class TasksModule {}
