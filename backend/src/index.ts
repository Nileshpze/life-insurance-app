import express from "express";
import cors from "cors";
import recommendationRouter from "./routes/recommendation";
import { initDB } from "./db";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use("/recommendation", recommendationRouter);

initDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
