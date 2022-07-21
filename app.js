import express from 'express';
import router from './routes/tasks.js';
import 'dotenv/config';
import connectDB from './database/connect.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/v1/tasks', router);

connectDB();

app.listen(port, () => {
	console.log(`server is listening on port ${port}...`);
});
