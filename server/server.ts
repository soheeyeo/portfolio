import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import router from './routes';

const url: string = process.env.DB_URL || '';

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(router);

mongoose
    .connect(url)
    .then(() => {
        console.log('Connect to MongoDB');
    })
    .catch((e) => {
        console.error(e);
    });

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
