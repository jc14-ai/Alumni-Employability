import express, { Request, Response } from "express";
import cors from "cors";

import helloRoute from "../routes/hello.route";

export const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://localhost:3000",
    credentials: true
}));

app.use("/api", helloRoute);

export default app;