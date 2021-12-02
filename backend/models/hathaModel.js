import mongoose from 'mongoose';

const hathaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  category: [String],
}, { timestamps: true });

export const hathaModel = mongoose.model('Hatha', hathaSchema);
