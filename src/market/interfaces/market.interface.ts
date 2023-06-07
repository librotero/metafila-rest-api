import { Document } from 'mongoose';

export interface Market extends Document {
  readonly name: string;
  readonly events: [string];

}
