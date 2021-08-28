import express, { response } from "express";
import mongoose from "mongoose";
import { FlightModel } from "./model/flight.js";

const airApi = express();
const port = 3000;
const uri = "mongodb+srv://admin:admin@maincluster.8vlyz.mongodb.net/ProjectAir?retryWrites=true&w=majority";

airApi.get("/", (req, res) => {
    res.end("Hello World!");
});

airApi.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

try {
    mongoose.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => { 
            console.log("connected");
        }
    );
} catch (error) {
    console.log("could not connect");
}

airApi.get("/flights", (req, res) => {
    FlightModel.find({})
        .then(model => { res.json(model) })
        .catch(error => { res.json(error) })
});