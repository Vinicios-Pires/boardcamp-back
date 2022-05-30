import { Router } from "express";
import {
	addRental,
	deleteRental,
	getAllRentals,
} from "../controllers/rentalsController.js";

const rentalRouter = Router();

rentalRouter.get("/rentals", getAllRentals);
rentalRouter.post("/rentals", addRental);
rentalRouter.delete("/rentals/:id", deleteRental);

export default rentalRouter;
