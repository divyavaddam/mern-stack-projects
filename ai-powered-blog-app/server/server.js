import express from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
import { HttpResponse } from "@google/genai";

const app = express();
const server = http.createServer(app);

(async () => {
  try {
    await connectDB();
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("DB Connection Failed:", err.message);
  }
})();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is working"));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

// Local Development Mode
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log("Server running on port " + PORT);
  });
}

export default server;
