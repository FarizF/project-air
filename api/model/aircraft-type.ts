import { model, Schema } from 'mongoose';

export interface AircraftType {
    iata: string,
    icao: string,
    name: string,
    paxCapacity: number,
    cargoCapacity: number,
	optimumCruiseAltititude: number
}

const schema = new Schema<AircraftType>({
	icao: { type: String, required: true },
	iata: { type: String, required: true },
	name: { type: String, required: true },
	paxCapacity: { type: Number, required: true },
	cargoCapacity: { type: Number, required: true },
	optimumCruiseAltititude: { type: Number, required: true }
});

export const AircraftTypeModel = model('AircraftType', schema);