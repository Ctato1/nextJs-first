import mongoose from "mongoose";

let isConnected = false;


export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDB is aldready connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
    isConnected = true;
  } catch (error) {
    console.log('connectToDb Error',error);
  }
};
