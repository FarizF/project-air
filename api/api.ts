import express from 'express';
import { connect, ConnectOptions } from 'mongoose';
import path = require('path');

import { userRouter } from './routes/user-router';
import { ceoRouter } from './routes/ceo-router';
import { companyRouter } from './routes/company-router';
import { flightRouter } from './routes/flight-router';
import { aircraftTypeRouter } from './routes/aircraft-type-router';

const airApi = express();
const port = 9001;
const uri = 'mongodb+srv://admin:admin@maincluster.8vlyz.mongodb.net/ProjectAir?retryWrites=true&w=majority';

// Include docs assets folders and files
airApi.use('/docs', express.static('docs'));

airApi.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/docs/index.html'));
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

airApi.use('/users', userRouter);
airApi.use('/ceo', ceoRouter);
airApi.use('/companies', companyRouter);
airApi.use('/flights', flightRouter);
airApi.use('/aircraft-types', aircraftTypeRouter);