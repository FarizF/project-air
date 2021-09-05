import { model, Schema } from 'mongoose';

export interface User {
	uuid: string,
	password: string
}

const schema = new Schema<User>({
	uuid: { type: String, required: true },
	password: { type: String, required: true }
});

export const userModel = model('User', schema);