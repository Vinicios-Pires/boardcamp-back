import db from "../db.js";

export async function getAllRentals(req, res) {
	try {
		const result = await db.query(`
      SELECT rentals.*, 
      customers.id as "customerId", customers.name as "customerName",
      games.id as "gameId", games.name as "gameName", games."categoryId"
      FROM rentals
      JOIN customers ON rentals."customerId" = customers.id 
      JOIN games ON rentals."gameId" = games.id
      `);

		res.send(result.rows);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}

export async function addRental(req, res) {
	const { customerId, gameId, daysRented } = req.body;
	try {
		await db.query(
			`
      INSERT INTO rentals ("customerId", "gameId", "daysRented")
      VALUES ($1, $2, $3)
      `,
			[customerId, gameId, daysRented]
		);

		res.sendStatus(201);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}

export async function deleteRental(req, res) {
	const { id } = req.params;
	try {
		await db.query(`DELETE FROM rentals WHERE id = $1;`, [id]);

		res.sendStatus(200);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}

export async function finishRental(req, res) {}
