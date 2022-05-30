import { Router } from "express";

import { addGame, getAllGames } from "../controllers/gamesController.js";
import { validateGame } from "../middlewares/gameValidator.js";

const gamesRouter = Router();

gamesRouter.get("/games", getAllGames);
gamesRouter.post("/games", validateGame, addGame);

export default gamesRouter;
