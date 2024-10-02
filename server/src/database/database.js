import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const databaseInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}`
    );
    console.log(
      `SUCCESS: Database connection successfull: ${databaseInstance.connection.host}`
    );
  } catch (exception) {
    console.log("ERROR: Database connection is unsuccessfull");
    process.exit(1);
  }
};

export default connectDatabase;
