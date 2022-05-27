import db from "../db.js";

export async function getCategories(req, res) {
	try {
		const result = await db.query("SELECT * FROM categories;");
		res.send(result.rows);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}

export async function addCategories(req, res) {
	const newCategorie = req.body;
	try {
		const result = await db.query(
			`
         INSERT INTO categories (name) 
         VALUES ($1);
         `,
			[req.body.name]
		);

		res.sendStatus(201);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}
