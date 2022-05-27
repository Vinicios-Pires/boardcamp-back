import { Router } from "express";

import {
	addCategories,
	getCategories,
} from "../controllers/categoriesController.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories", getCategories);
categoriesRouter.post("/categories", addCategories);

export default categoriesRouter;
