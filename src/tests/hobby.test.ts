import mongoose from 'mongoose';
import request from 'supertest';
import App from '@/app';
import { CreateHobbiesDto } from '@dtos/hobbies.dto';
import HobbyRoute from '@routes/hobbies.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Hobby', () => {
  describe('[GET] /hobby', () => {
    it('response fineAll Hobby', async () => {
      const hobbiesRoute = new HobbyRoute();
      const hobbies = hobbiesRoute.hobbyController.hobbyService.hobbies;

      hobbies.find = jest.fn().mockReturnValue([
        {
          _id: 'qpwoeiruty',
          passionLevel: 'High',
          name: 'coding',
          user: '612290bb39bc420290284d5c',
          year: '2013-03-01T00:00:00.000Z',

        },
        {
          _id: 'qpwoeirutysdfdf',
          passionLevel: 'High',
          name: 'swingin',
          user: '612290bb39bc420290284d5c',
          year: '2013-03-01T00:00:00.000Z',

        },
        {
          _id: 'qpwoeiruty',
          passionLevel: 'Low',
          name: 'coding',
          user: '612290bb39bc420290284d5c',
          year: '2013-03-01T00:00:00.000Z',

        },
      ]);

      (mongoose as any).connect = jest.fn();
      const app = new App([hobbiesRoute]);
      return request(app.getServer()).get(`${hobbiesRoute.path}`).expect(200);
    });
  });

  describe('[GET] /hobby/:hobbyid', () => {
    it('response findOne hobby', async () => {
      const hobbyId = 'qpwoeirutysdfdf';

      const hobbiesRoute = new HobbyRoute();
      const hobbies = hobbiesRoute.hobbyController.hobbyService.hobbies;

      hobbies.findOne = jest.fn().mockReturnValue({
          _id: 'qpwoeirutysdfdf',
          passionLevel: 'High',
          name: 'swingin',
          user: '612290bb39bc420290284d5c',
          year: '2013-03-01T00:00:00.000Z',
        });

      (mongoose as any).connect = jest.fn();
      const app = new App([hobbiesRoute]);
      return request(app.getServer()).get(`${hobbiesRoute.path}/${hobbyId}`).expect(200);
    });
  });

  describe('[POST] /hobby', () => {
    it('response create hobby', async () => {

      const hobbyData: CreateHobbiesDto = {
          passionLevel: 'High',
          name: 'swingin',
          user: '612290bb39bc420290284d5c',
          year: new Date('2013-03-01T00:00:00.000Z'),
      }

      const hobbyId = 'qpwoeirutysdfdf';

      const hobbiesRoute = new HobbyRoute();
      const hobbies = hobbiesRoute.hobbyController.hobbyService.hobbies;

      hobbies.findOne = jest.fn().mockReturnValue({
          _id: hobbyId,
          passionLevel: hobbyData.passionLevel,
          name: hobbyData.name,
          user: hobbyData.user,
          year: hobbyData.year,
        });

      (mongoose as any).connect = jest.fn();
      const app = new App([hobbiesRoute]);
      return request(app.getServer()).get(`${hobbiesRoute.path}`).send(hobbyData).expect(200);
    });
  });

  //describe('[POST] /users', () => {
    //it('response Create User', async () => {
      //const userData: CreateHobbyDto = {
        //email: 'test@email.com',
        //password: 'q1w2e3r4',
      //};

      //const hobbiesRoute = new HobbyRoute();
      //const users = hobbiesRoute.hobbyController.userService.users;

      //users.findOne = jest.fn().mockReturnValue(null);
      //users.create = jest.fn().mockReturnValue({
        //_id: '60706478aad6c9ad19a31c84',
        //email: userData.email,
        //password: await bcrypt.hash(userData.password, 10),
      //});

      //(mongoose as any).connect = jest.fn();
      //const app = new App([hobbiesRoute]);
      //return request(app.getServer()).post(`${hobbiesRoute.path}`).send(userData).expect(201);
    //});
  //});

  //describe('[PUT] /users/:id', () => {
    //it('response Update User', async () => {
      //const userId = '60706478aad6c9ad19a31c84';
      //const userData: CreateHobbyDto = {
        //email: 'test@email.com',
        //password: 'q1w2e3r4',
      //};

      //const hobbiesRoute = new HobbyRoute();
      //const users = hobbiesRoute.hobbyController.userService.users;

      //if (userData.email) {
        //users.findOne = jest.fn().mockReturnValue({
          //_id: userId,
          //email: userData.email,
          //password: await bcrypt.hash(userData.password, 10),
        //});
      //}

      //users.findByIdAndUpdate = jest.fn().mockReturnValue({
        //_id: userId,
        //email: userData.email,
        //password: await bcrypt.hash(userData.password, 10),
      //});

      //(mongoose as any).connect = jest.fn();
      //const app = new App([hobbiesRoute]);
      //return request(app.getServer()).put(`${hobbiesRoute.path}/${userId}`).send(userData);
    //});
  //});

  //describe('[DELETE] /users/:id', () => {
    //it('response Delete User', async () => {
      //const userId = '60706478aad6c9ad19a31c84';

      //const hobbiesRoute = new HobbyRoute();
      //const users = hobbiesRoute.hobbyController.userService.users;

      //users.findByIdAndDelete = jest.fn().mockReturnValue({
        //_id: '60706478aad6c9ad19a31c84',
        //email: 'test@email.com',
        //password: await bcrypt.hash('q1w2e3r4!', 10),
      //});

      //(mongoose as any).connect = jest.fn();
      //const app = new App([hobbiesRoute]);
      //return request(app.getServer()).delete(`${hobbiesRoute.path}/${userId}`).expect(200);
    //});
  //});
});
