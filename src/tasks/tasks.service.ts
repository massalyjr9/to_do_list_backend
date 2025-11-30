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
    @InjectModel(Task.name) // <= IMPORTANT
    private readonly taskModel: Model<TaskDocument>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const created = new this.taskModel(createTaskDto);
    return created.save();
  }

  findAll() {
    return this.taskModel.find().exec();
  }

  async findOne(id: string) {
    const task = await this.taskModel.findById(id).exec();
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const updated = await this.taskModel
      .findByIdAndUpdate(id, updateTaskDto, { new: true })
      .exec();
    if (!updated) throw new NotFoundException('Task not found');
    return updated;
  }

  async remove(id: string) {
    const res = await this.taskModel.findByIdAndDelete(id).exec();
    if (!res) throw new NotFoundException('Task not found');
    return res;
  }
}
