import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CameraDocument = Camera & Document;

@Schema({ timestamps: true })
export class Camera {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rtspUrl: string;

  @Prop({
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  })
  location: {
    type: string;
    coordinates: number[];
  };

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  lastCaptureAt: Date;
}

export const CameraSchema = SchemaFactory.createForClass(Camera);
CameraSchema.index({ location: '2dsphere' });
