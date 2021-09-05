import { model, Schema } from 'mongoose';

export interface Company {
	id: number,
	iata: string,
	icao: string,
	name: string,
	cash: number
}

const schema = new Schema<Company>({
	id: { type: Number, required: true },
	iata: { type: String, required: true },
	icao: { type: String, required: true },
	name: { type: String, required: true },
	cash: { type: Number, required: true }
});

export const companyModel = model('Company', schema);