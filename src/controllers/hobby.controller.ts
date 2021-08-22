import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { Hobby } from '@interfaces/hobby.interface';
import HobbyService from '@services/hobby.service';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';

class HobbyController {
  public hobbyService = new HobbyService();
  public userService = new userService();

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
      const createHobbyData : Hobby = await this.hobbyService.createHobby(hobbyData);

      res.status(201).json({ data: createHobbyData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getHobbyById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.userid;
      
      const findOneUserData: User = await this.userService.findUserById(userId);
      if (findOneUserData) {
        const hobbiesData: Hobby[] = await this.hobbyService.findAllHobbiesByUserId(userId);

        res.status(201).json({ data: hobbiesData, message: 'found' });

      }
      res.status(400).json({ data: {'data': 'none'}, message: 'none' });
    } catch (error) {
      next(error);
    }
  };

}

export default HobbyController;
