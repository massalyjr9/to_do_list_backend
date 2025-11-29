import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

/**
  Contrôleur responsable de gérer les routes liées aux tâches.
  Il reçoit les requêtes HTTP et délègue la logique métier au TasksService.
*/
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  /**
    Route POST /tasks
    Permet de créer une nouvelle tâche.
    Les données reçues dans le corps de la requête sont validées via CreateTaskDto.
  */
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  /**
    Route GET /tasks
    Retourne la liste de toutes les tâches.
  */
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  /**
    Route GET /tasks/:id
    Récupère une tâche spécifique via son identifiant.
  */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  /**
    Route PUT /tasks/:id
    Met à jour une tâche existante.
    Les données envoyées sont validées via UpdateTaskDto.
  */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  /**
    Route DELETE /tasks/:id
    Supprime une tâche en fonction de son identifiant.
  */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
