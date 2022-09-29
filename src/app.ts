import "dotenv/config";
import express from "express";
import "express-async-errors";
import cors from "cors";

import { validationErrorMiddleware } from "./lib/validation";

import planetsRoutes from "./routes/planets";

const app = express();

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

app.use("/planets", planetsRoutes);

app.use(validationErrorMiddleware);

export default app;
