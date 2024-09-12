import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { DbRun, client } from "./config/db.js";

dotenv.config()


const port = process.env.PORT || 3300;
const app = express();

//middleware
app.use(cors());
app.use(express.json());


DbRun().catch(console.dir)

const userCollection = client.db("TalkNestDB").collection("Users");

app.get('/users', async(req, res) => {
    const result = await userCollection.find().toArray();
    res.send(result);
})

app.get('/', (req, res) => {
    res.send("chat-server is running");
})
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
