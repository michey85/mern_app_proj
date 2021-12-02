import mongoose from 'mongoose';

const mantraSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  words: {
    type: String,
    required: true,
    unique: true,
  },
  category: [String],
});

export const mantraModel = mongoose.model('Manta', mantraSchema);
