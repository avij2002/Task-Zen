import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        const databaseInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}`);
    } catch (exception) {
        
    }
};