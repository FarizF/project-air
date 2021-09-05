import { model, Schema } from 'mongoose';

export interface Flight {
	id: string,
	flightNumber: string,
	airport: string,
	passengers: number,
	cargoKg: number,
	aircraftTypeId: number
}

const schema = new Schema<Flight>({
	id: { type: String, required: true },
	flightNumber: { type: String, required: true },
	airport: { type: String, required: true },
	passengers: { type: Number, required: true },
	cargoKg: { type: Number, required: true },
	aircraftTypeId: { type: Number,  required: false }
});

export const flightModel = model('Flight', schema);