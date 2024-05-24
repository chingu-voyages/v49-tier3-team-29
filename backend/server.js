import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectDB } from "./config/db.js";
import { genLimiter } from "./middleware/limiter.js";
import userRoutes from "./routes/userRoute.js";
import bookRoutes from "./routes/bookRoute.js";
import authRoutes from "./routes/auth.js";

// Load environment variables
dotenv.config();
const port = process.env.PORT || 5000;

// Declare express app
const app = express();

// Security Middleware
app.use(helmet());
app.use(cors());

// Apply general rate limiter to all routes
app.use(genLimiter);

app.use(express.json());

//* Routes
app.use("/users", userRoutes);
app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Shelf Shell");
}); //* for password reset
app.use("/auth", authRoutes);

//* Connect to Database and then Start Server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening live on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(`Database Connection Error: ${error}`);
  });
