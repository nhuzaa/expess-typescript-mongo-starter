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
    this.router.post(`${this.path}`, this.hobbyController.createHobby);
    this.router.get(`${this.path}/:hobbyid`, this.hobbyController.getHobbyById);
    this.router.put(`${this.path}/:hobbyid`, this.hobbyController.updateHobbyById);
    this.router.delete(`${this.path}/:hobbyid`, this.hobbyController.deleteHobbyById);
    this.router.get(`${this.path}/user/:userid`, this.hobbyController.getHobbiesOfUser);
  }
}

export default HobbyRoute;
