import bcrypt from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { Hobby } from '@interfaces/hobby.interface';
import hobbyModel from '@models/hobby.model';
import { isEmpty } from '@utils/util';

class HobbyService {
  public hobbies = hobbyModel;

  public async findAllHobbies(): Promise<Hobby[]> {
    const hobbies: Hobby[] = await this.hobbies.find();
    return hobbies;
  }

  public async findAllHobbiesByUserId(userId: string): Promise<Hobby[]> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const hobbies: Hobby[] = await this.hobbies.find({user:userId});

    return hobbies;
  }

  public async createHobby(hobbyData): Promise<Hobby> {
    if (isEmpty(hobbyData)) throw new HttpException(400, "You're not HobbyData");

    //const findUser: User = await this.users.findOne({ email: userData.email });
    //if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    //const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createHobbyData: Hobby = await this.hobbies.create({ ...hobbyData });

    return createHobbyData;
  }
}

export default HobbyService;
