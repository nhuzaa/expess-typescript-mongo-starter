import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { Hobby } from '@interfaces/hobby.interface';
import HobbyService from '@services/hobby.service';

class HobbyController {
  public hobbyService = new HobbyService();

  public getHobbies = async (req: Request, res: Response, next: NextFunction) => {
    //return res.status(200).json({data : [1,2,3,4]});
    try {
      const findAllHobbiesData: Hobby[] = await this.hobbyService.findAllHobbies();

      res.status(200).json({ data: findAllHobbiesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createHobby = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hobbyData = req.body;
      const createUserData: Hobby = await this.hobbyService.createHobby(hobbyData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

}

export default HobbyController;
