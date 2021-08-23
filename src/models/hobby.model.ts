import { model, Schema, Document } from 'mongoose';
import { Hobby } from '@interfaces/hobby.interface';

const hobbySchema: Schema = new Schema({
  passionLevel: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High', 'Very-High']
  },
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const hobbyModel = model<Hobby & Document>('Hobby', hobbySchema);

export default hobbyModel;
