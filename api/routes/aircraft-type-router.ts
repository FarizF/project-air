import express from 'express';
import { AircraftType, AircraftTypeModel } from '../model/aircraft-type';

export const aircraftTypeRouter = express.Router();

aircraftTypeRouter.get('/', (req, res) => {
	AircraftTypeModel.find({})
		.then((model: AircraftType) => { res.status(200).json(model); })
		.catch((error: unknown) => {
			console.log(error);
			res.status(500).send(error);
		});
});