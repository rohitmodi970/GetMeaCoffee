//connecting to the database
import mongoose from "mongoose";
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://rohitkumar970ss:getmeacoffee@cluster0.knys3.mongodb.net/`, {
        useNewUrlParser: true,
      });
      // console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  export default connectDB