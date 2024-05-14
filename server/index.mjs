import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cocktailsRouter from "./routes/players.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json()); 

// Route configurations
app.use("/api/players", playersRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
