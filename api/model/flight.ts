import { model, Schema } from  'mongoose';

interface Flight {
    flightid: { type: string },
    airport: { type: string }
}

const schema = new Schema<Flight>({
    flightid: { type: String, required: true },
    airport: { type: String, required: true }
});

export const FlightModel = model('flight', schema);