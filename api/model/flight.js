import Mongoose from "mongoose";

export const FlightModel = Mongoose.model("flight", {
    flightid: String,
    airport: String
});