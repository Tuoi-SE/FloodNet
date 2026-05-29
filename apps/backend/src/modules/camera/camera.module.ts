import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CameraService } from './camera.service';
import { CameraController } from './camera.controller';
import { Camera, CameraSchema } from './schemas/camera.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Camera.name, schema: CameraSchema }])],
  controllers: [CameraController],
  providers: [CameraService],
  exports: [CameraService],
})
export class CameraModule {}
