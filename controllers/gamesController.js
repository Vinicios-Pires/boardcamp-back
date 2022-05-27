import db from "../db.js";

export async function getAllGames(req, res) {
	try {
		const result = await db.query(`SELECT * FROM games;`);
		res.send(result.rows);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}

export async function getGame(req, res) {
	const { name } = req.params;
	try {
		const result = await db.query(
			`SELECT games.*, categories.name 
          FROM games
          JOIN categories ON games."categoryId" = categories.id
          WHERE games.name = $1
         `,
			[name]
		);

		const game = result.rows[0];
		console.log(game);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}
