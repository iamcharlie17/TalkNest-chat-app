import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from "mongodb";
dotenv.config()


const uri = process.env.DB_URL;

export const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

export const DbRun = async() => {
    try {
        
        console.log("MongoDB connected!");
    } catch (error) {
        console.log(error)
    }
}

