import { model, Schema, Document } from 'mongoose';
import { Hobby } from '@interfaces/hobby.interface';

const hobbySchema: Schema = new Schema({
  passionLevel: {
    type: String,
    required: true,
    unique: false,
  },
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const hobbyModel = model<Hobby & Document>('Hobby', hobbySchema);

export default hobbyModel;
