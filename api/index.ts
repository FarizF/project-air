import express from 'express';
import { connect, ConnectOptions } from 'mongoose';
import { FlightModel } from './model/flight';

const airApi = express();
const port = 9001;
const uri = 'mongodb+srv://admin:admin@maincluster.8vlyz.mongodb.net/ProjectAir?retryWrites=true&w=majority';

airApi.get('/', (req, res) => {
	res.end('Hello World!');
});

airApi.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});

try {
	connect(
		uri,
        { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions,
        () => { console.log('connected'); }
	);
} catch (error) {
	console.log('could not connect');
}

airApi.get('/flights', (req, res) => {
	FlightModel.find({})
		.then((model: unknown) => { res.json(model); })
		.catch((error: unknown) => { res.json(error); });
});