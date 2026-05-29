import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  zaloId: string;

  @Prop({ default: 50 })
  reputation: number;

  @Prop({ default: 0 })
  reportsCount: number;

  @Prop({ default: 0 })
  verifiedCount: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
