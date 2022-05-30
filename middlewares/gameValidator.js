import joi from "joi";

export function validateGame(req, res, next) {
	const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

	const gameSchema = joi.object({
		name: joi.string().required(),
		image: joi.string().required(),
		stockTotal: joi.number().greater(0).required(),
		categoryId: joi.number().required(),
		pricePerDay: joi.number().greater(0).required(),
	});

	const validation = gameSchema.validate(req.body);
	if (validation.error) {
		return res.sendStatus(400);
	}

	next();
}
