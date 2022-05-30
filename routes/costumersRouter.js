import { Router } from "express";

import {
	addNewCustomer,
	getAllCustomers,
	getCustomer,
	updateCustomer,
} from "../controllers/costumersController.js";
import { customerValidate } from "../middlewares/customerValidator.js";

const costumerRouter = Router();

costumerRouter.get("/customers", getAllCustomers);
costumerRouter.get("/customers/:id", getCustomer);
costumerRouter.post("/customers/", customerValidate, addNewCustomer);
costumerRouter.put("/customers/:id", updateCustomer);

export default costumerRouter;
