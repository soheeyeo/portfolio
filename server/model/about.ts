import { Iabout } from '../types/about';
import { model, Schema } from 'mongoose';

const aboutSchema: Schema = new Schema({
    info: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

export default model<Iabout>('About', aboutSchema);
