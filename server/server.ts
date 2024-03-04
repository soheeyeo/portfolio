import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const url: string = process.env.DB_URL || '';

const app: Express = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

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
