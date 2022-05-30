import db from "../db.js";

export async function getAllGames(req, res) {
	try {
		const result = await db.query(`
      SELECT games.*, categories.name as "nameCategory"
      FROM games
      JOIN categories ON games."categoryId" = categories.id;`);
		res.send(result.rows);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}

export async function addGame(req, res) {
	const { name, image, stockTotal, categoryId, pricePerDay } = req.body;
	try {
		const result = await db.query(
			`
          INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay")
          VALUES ($1, $2, $3, $4, $5);
         `,
			[name, image, stockTotal, categoryId, pricePerDay]
		);

		res.sendStatus(201);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}
