import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async findOrCreate(zaloId: string): Promise<User> {
    let user = await this.userModel.findOne({ zaloId }).exec();
    if (!user) {
      user = await this.userModel.create({ zaloId });
    }
    return user;
  }

  async updateReputation(zaloId: string, isVerified: boolean): Promise<void> {
    const update: any = { $inc: { reportsCount: 1 } };
    if (isVerified) {
      update.$inc.verifiedCount = 1;
      update.$inc.reputation = 2;
    } else {
      update.$inc.reputation = -1;
    }
    await this.userModel.updateOne({ zaloId }, update);
  }

  async getReputation(zaloId: string): Promise<number> {
    const user = await this.userModel.findOne({ zaloId }).exec();
    return user?.reputation ?? 0;
  }
}
