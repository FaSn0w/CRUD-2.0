import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const config = {
    host: process.env.MONGODB_HOST,
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    port: process.env.MONGODB_PORT || 27017,
    database: process.env.DATABASE || 'Login'
}


mongoose.set("strictQuery", false); // remove log warning 
await mongoose.connect(`mongodb://${config.user}:${config.password}@${config.host}:${config.port}/`,{
    dbName: config.database
  });
let db = mongoose.connection

export default db;