import "dotenv/config";
import express from "express";
import "express-async-errors";

import { initCorsMiddleware } from "./lib/middleware/cors";
import { validationErrorMiddleware } from "./lib/middleware/validation";
import { initSessionMiddleware } from "./lib/middleware/session";
import { passport } from "./lib/middleware/passport";

import planetsRoutes from "./routes/planets";

const app = express();

app.use(initSessionMiddleware());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use(initCorsMiddleware());

app.use("/planets", planetsRoutes);

app.use(validationErrorMiddleware);

export default app;
