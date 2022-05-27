import { Router } from "express";

import { getAllGames, getGame } from "../controllers/gamesController.js";

const gamesRouter = Router();

gamesRouter.get("/games", getAllGames);
gamesRouter.get("/games/:name", getGame);

export default gamesRouter;
