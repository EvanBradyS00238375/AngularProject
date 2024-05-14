import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "mongodb+srv://s00238375:<P@55w0rd1357>@wp1.xkqakgt.mongodb.net/";
const client = new MongoClient(connectionString);

async function connectDb() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("Wp1"); 
    return db;
  } catch (e) {
    console.error("Could not connect to MongoDB", e);
    process.exit(1);
  }
}

export const db = connectDb();
