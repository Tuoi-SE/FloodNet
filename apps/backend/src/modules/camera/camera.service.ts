import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Camera, CameraDocument } from './schemas/camera.schema';

@Injectable()
export class CameraService {
  constructor(
    @InjectModel(Camera.name) private cameraModel: Model<CameraDocument>,
  ) {}

  async findAll(): Promise<Camera[]> {
    return this.cameraModel.find().exec();
  }

  async findActive(): Promise<Camera[]> {
    return this.cameraModel.find({ isActive: true }).exec();
  }

  async updateLastCapture(id: string): Promise<void> {
    await this.cameraModel.findByIdAndUpdate(id, { lastCaptureAt: new Date() }).exec();
  }
}
