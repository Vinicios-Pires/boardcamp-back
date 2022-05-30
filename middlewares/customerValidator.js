import joi from "joi";

export function customerValidate(req, res, next) {
	const { name, phone, cpf, birthday } = req.body;

	const customerSchema = joi.object({
		name: joi.string().required(),
		phone: joi.string().alphanum().min(10).max(11).required(),
		cpf: joi.string().alphanum().min(11).max(11).required(),
		birthday: joi.string().required(),
	});

	const validation = customerSchema.validate(req.body);
	if (validation.error) {
		return res.sendStatus(400);
	}

	next();
}
