import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MarketDocument = HydratedDocument<Market>;

@Schema({
  timestamps: true,
})
export class Market {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  events: string[];
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const MarketSchema = SchemaFactory.createForClass(Market);
