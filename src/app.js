import express, { response } from "express";

import { logger } from "./middlewares/logger.middleware.js";
import { customerRouter } from "./routes/customer.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(logger);

// Routes
app.use("/customers", customerRouter);

export { app };