import express from "express";
import morgan from "morgan";
// Routes
import alimentosRoutes from "./routes/language.routes";

const app = express();

// Settings
app.set("port", 5000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/hola", alimentosRoutes);

export default app;
