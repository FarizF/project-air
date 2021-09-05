import express from 'express';
import { Flight, flightModel } from '../model/flight';

export const flightRouter = express.Router();

flightRouter.get('/', (req, res) => {
	flightModel.find({})
		.then((model: Flight) => { res.status(200).json(model); })
		.catch((error: unknown) => {
			console.log(error);
			res.status(500).send(error);
		});
});