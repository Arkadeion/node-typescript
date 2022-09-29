import "dotenv/config";
import express from "express";
import "express-async-errors";

import { initCorsMiddleware } from "./lib/middleware/cors";
import { validationErrorMiddleware } from "./lib/middleware/validation";

import planetsRoutes from "./routes/planets";

const app = express();

app.use(express.json());

app.use(initCorsMiddleware());

app.use("/planets", planetsRoutes);

app.use(validationErrorMiddleware);

export default app;
