import { model, Schema } from 'mongoose';

export interface Ceo {
	id: number,
	userId: string,
	firstName: string,
	lastName: string,
	holdingId: string,
	ownedAirlinerIds: Array<string>
}

const schema = new Schema<Ceo>({
	id: { type: Number, required: true },
	userId: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	holdingId: { type: String, required: false },
	ownedAirlinerIds: [{ type: String, required: false }]
});

export const ceoModel = model('Ceo', schema);