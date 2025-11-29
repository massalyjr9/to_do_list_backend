import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    // Création d'un module de test contenant le contrôleur et son service associé
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    // Récupération de l'instance du AppController depuis le module de test
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    // Vérifie que la méthode getHello() retourne bien "Hello World!"
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
