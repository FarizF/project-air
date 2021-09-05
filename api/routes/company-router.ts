import express from 'express';
import { Company, companyModel } from '../model/company';

export const companyRouter = express.Router();

companyRouter.get('/', (req, res) => {
	companyModel.find({})
		.then((model: Company) => { res.status(200).json(model); })
		.catch((error: unknown) => {
			console.log(error);
			res.status(500).send(error);
		});
});