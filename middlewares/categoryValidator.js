import joi from "joi";

export function validateCategory(req, res, next) {
	const categorySchema = joi.object({
		name: joi.string().required(),
	});

	const validation = categorySchema.validate(req.body);
	if (validation.error) {
		return res.sendStatus(400);
	}

	next();
}
