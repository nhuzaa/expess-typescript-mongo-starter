import { CreateHobbiesDto } from '@dtos/hobbies.dto';
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

  public async findHobbyById(hobbyId: string): Promise<Hobby> {
    const h: Hobby = await this.hobbies.findOne({ _id: hobbyId });
    return h;
  }

  public async findAllHobbiesByUserId(userId: string): Promise<Hobby[]> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const hobbies: Hobby[] = await this.hobbies.find({ user:userId });

    return hobbies;
  }

  public async createHobby(hobbyData: CreateHobbiesDto): Promise<Hobby> {
    if (isEmpty(hobbyData)) throw new HttpException(400, "You're not HobbyData");

    const createHobbyData: Hobby = await this.hobbies.create({ ...hobbyData });

    return createHobbyData;
  }

  public async updateHobby(hobbyId: string, hobbyData: CreateHobbiesDto): Promise<Hobby> {

    console.log('createhobby', hobbyData);
    if (isEmpty(hobbyData)) throw new HttpException(400, "You're not HobbyData");

    const updateHobbyById: Hobby = await this.hobbies.findByIdAndUpdate(hobbyId, { hobbyData }, { new: true, runValidator: true });
    console.log('updated', updateHobbyById);

    if (!updateHobbyById) throw new HttpException(409, "You're not Hobby");

    return updateHobbyById;
  }

  public async deleteHobby(hobbyId: string): Promise<Hobby> {
    const deleteHobbyById: Hobby = await this.hobbies.findByIdAndDelete(hobbyId);
    if (!deleteHobbyById) throw new HttpException(409, "You're not Hobby");

    return deleteHobbyById;
  }
}

export default HobbyService;
