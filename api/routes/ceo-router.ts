import express from 'express';
import { Ceo, ceoModel } from '../model/ceo';

export const ceoRouter = express.Router();

ceoRouter.get('/', (req, res) => {
	ceoModel.find({})
		.then((model: Ceo) => { res.status(200).json(model); })
		.catch((error: unknown) => {
			console.log(error);
			res.status(500).send(error);
		});
});