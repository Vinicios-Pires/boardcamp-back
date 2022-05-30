import db from "../db.js";

export async function getAllCustomers(req, res) {
	try {
		const result = await db.query(`
      SELECT *
      FROM customers; 
      `);

		res.send(result.rows);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}

export async function getCustomer(req, res) {
	const { id } = req.params;
	try {
		const customerExists = await db.query(
			`SELECT * FROM customers WHERE id = $1;`,
			[id]
		);
		if (customerExists.rows.length === 0) {
			return res.sendStatus(404);
		}

		const result = await db.query(
			`
         SELECT customers.* 
         FROM customers
         WHERE customers.id = $1
         `,
			[id]
		);

		const customer = result.rows[0];

		res.send(customer);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}

export async function addNewCustomer(req, res) {
	const { name, phone, cpf, birthday } = req.body;

	try {
		const cpfExists = await db.query(`SELECT * FROM customers WHERE cpf = $1`, [
			cpf,
		]);
		if (cpfExists.rows.length > 0) {
			return res.sendStatus(409);
		}

		await db.query(
			`
         INSERT INTO customers (name, phone, cpf, birthday)
         VALUES ($1, $2, $3, $4);
         `,
			[name, phone, cpf, birthday]
		);

		res.sendStatus(201);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}

export async function updateCustomer(req, res) {
	const { id } = req.params;
	const { name, phone, cpf, birthday } = req.body;
	try {
		await db.query(
			`
         UPDATE customers
         SET
            name = $1,
            phone = $2,
            cpf = $3,
            birthday = $4
         WHERE id = $5
         `,
			[name, phone, cpf, birthday, id]
		);
		res.sendStatus(200);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}
