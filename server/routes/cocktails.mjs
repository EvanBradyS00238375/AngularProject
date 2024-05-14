import express from "express";
import { db } from "../db/conn.mjs";

const router = express.Router();

router.post("/", async (req, res) => {
  const collection = (await db).collection("cocktails");
  const result = await collection.insertOne(req.body);
  res.status(201).send(result);
});

export default router;
