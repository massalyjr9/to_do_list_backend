import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from '../../src/tasks/tasks.service';
import { getModelToken } from '@nestjs/mongoose';
import { Task } from '../../src/tasks/schemas/task.schema';

describe('TasksService', () => {
  let service: TasksService;
  let model: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getModelToken(Task.name),
          useValue: {
            find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([]) }),
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            findByIdAndDelete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
    model = module.get(getModelToken(Task.name));
  });

  it('should return an array of tasks', async () => {
    const tasks = await service.findAll();
    expect(tasks).toEqual([]);
    expect(model.find).toHaveBeenCalled();
  });
});
