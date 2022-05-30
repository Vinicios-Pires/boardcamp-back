import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./db.js";

import categoriesRouter from "./routes/categoriesRouter.js";
import gamesRouter from "./routes/gamesRouter.js";
import costumerRouter from "./routes/costumersRouter.js";
import rentalRouter from "./routes/rentalsRouter.js";

const app = express();
app.use(cors());
app.use(json());
dotenv.config();

app.use(categoriesRouter);
app.use(gamesRouter);
app.use(costumerRouter);
app.use(rentalRouter);

const port = process.env.PORT || 5000;
app.listen(port, () =>
	console.log(`Servidor aberto em: "http://localhost:5000/"`)
);
