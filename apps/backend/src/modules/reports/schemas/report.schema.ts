import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportDocument = Report & Document;

@Schema({ timestamps: true })
export class Report {
  @Prop({ required: true, enum: ['user', 'camera'] })
  type: string;

  @Prop({ required: true })
  source: string;

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

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ default: -1 })
  waterLevel: number;

  @Prop({ default: 0 })
  confidence: number;

  @Prop({ enum: ['pending', 'verified', 'rejected'], default: 'pending' })
  status: string;

  @Prop({ default: 0 })
  reputation: number;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
ReportSchema.index({ location: '2dsphere' });
ReportSchema.index({ createdAt: -1 });
