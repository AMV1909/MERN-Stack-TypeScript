import express from "express";
import cors from "cors";
import morgan from "morgan";

import { routes } from "./routes/router/router.routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(routes.videos);

export { app };
