import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    // Injection du modèle Mongoose associé à Task
    private readonly taskModel: Model<TaskDocument>,
  ) {}

  // Création d'une nouvelle tâche dans la base de données
  create(createTaskDto: CreateTaskDto) {
    const created = new this.taskModel(createTaskDto);
    return created.save();
  }

  // Récupération de toutes les tâches
  findAll() {
    return this.taskModel.find().exec();
  }

  // Recherche d'une tâche via son identifiant
  async findOne(id: string) {
    const task = await this.taskModel.findById(id).exec();

    // Si aucune tâche n'est trouvée, lever une exception HTTP 404
    if (!task) throw new NotFoundException('Task not found');

    return task;
  }

  // Mise à jour d'une tâche existante
  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const updated = await this.taskModel
      .findByIdAndUpdate(id, updateTaskDto, { new: true }) // new:true renvoie l'objet mis à jour
      .exec();

    // Si la tâche n'existe pas, renvoyer une erreur 404
    if (!updated) throw new NotFoundException('Task not found');

    return updated;
  }

  // Suppression d'une tâche
  async remove(id: string) {
    const res = await this.taskModel.findByIdAndDelete(id).exec();

    // Si aucune tâche n'a été supprimée, renvoyer une erreur 404
    if (!res) throw new NotFoundException('Task not found');

    return res;
  }
}
