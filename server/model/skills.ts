import { Iskills } from '../types/skills';
import { model, Schema } from 'mongoose';

const skillsSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    content: {
        type: [String],
    },
});

export default model<Iskills>('Skills', skillsSchema);
