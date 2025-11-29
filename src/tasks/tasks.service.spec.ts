import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from '../../src/tasks/tasks.service';
import { getModelToken } from '@nestjs/mongoose';
import { Task } from '../../src/tasks/schemas/task.schema';

describe('TasksService', () => {
  let service: TasksService;
  let model: any;

  beforeEach(async () => {
    // Création d'un module de test NestJS
    // Le modèle Mongoose est remplacé par un mock Jest pour éviter une vraie connexion à MongoDB
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          // Injection d'un faux modèle Mongoose associé à Task
          provide: getModelToken(Task.name),
          useValue: {
            // Simulation de la méthode find() utilisée par le service
            // find() retourne un objet contenant exec(), qui résout une liste vide
            find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([]) }),

            // Autres méthodes Mongoose mockées pour d’éventuels futurs tests
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            findByIdAndDelete: jest.fn(),
          },
        },
      ],
    }).compile();

    // Récupération du service et du modèle mocké depuis le conteneur NestJS
    service = module.get<TasksService>(TasksService);
    model = module.get(getModelToken(Task.name));
  });

  it('should return an array of tasks', async () => {
    // Appel de la méthode findAll() du service
    const tasks = await service.findAll();

    // Vérifie que le service retourne bien une liste vide
    expect(tasks).toEqual([]);

    // Vérifie qu'il utilise correctement model.find()
    expect(model.find).toHaveBeenCalled();
  });
});
