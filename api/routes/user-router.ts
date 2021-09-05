import express from 'express';
import { User, userModel } from '../model/user';

export const userRouter = express.Router();

userRouter.get('/', (req, res) => {
	userModel.find({})
		.then((model: User) => { res.status(200).json(model); })
		.catch((error: unknown) => {
			console.log(error);
			res.status(500).send(error);
		});
});