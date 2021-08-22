import { Router } from 'express';
import HobbyController from '@controllers/hobby.controller';
//import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
//import validationMiddleware from '@middlewares/validation.middleware';

class HobbyRoute implements Routes {
  public path = '/hobby';
  public router = Router();
  public hobbyController = new HobbyController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.hobbyController.getHobbies);
    this.router.get(`${this.path}/:userid`, this.hobbyController.getHobbyById);
    this.router.post(`${this.path}`, this.hobbyController.createHobby);
  }
}

export default HobbyRoute;
