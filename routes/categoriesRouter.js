import { Router } from "express";

import {
	addCategories,
	getCategories,
} from "../controllers/categoriesController.js";
import { validateCategory } from "../middlewares/categoryValidator.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories", getCategories);
categoriesRouter.post("/categories", validateCategory, addCategories);

export default categoriesRouter;
