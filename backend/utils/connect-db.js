import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();

const url = process.env.MONGO_URI;


export const connectDB = () => {
  try {
    mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }, () => console.log('db connected'.yellow.inverse));
  } catch (error) {
    console.error(`Error DB connection: ${error.message}`.red.bold);
    process.exit(1);
  }
};
