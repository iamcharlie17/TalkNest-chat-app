import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config()


const port = process.env.PORT || 3300;
const uri = process.env.DB_URL;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

const DbRun = async() => {
    try {
        
        console.log("MongoDB connected!");
    } catch (error) {
        console.log(error)
    }
}

DbRun().catch(console.dir)


app.get('/', (req, res) => {
    res.send("chat-server is running");
})
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
