import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PilotDocument = Pilot & Document;

@Schema()
export class Pilot {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  team: string;

  @Prop({ default: 0 })
  wins: number;

  @Prop({ default: 0 })
  podiums: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PilotSchema = SchemaFactory.createForClass(Pilot);