import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Atlas ansluten`);
  } catch (error) {
    console.error(`Fel vid anslutningen till databas: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
