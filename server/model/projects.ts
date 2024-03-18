import { Iprojects } from '../types/projects';
import { model, Schema } from 'mongoose';

const projectsSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    intro: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    stack: {
        type: Object,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    link: {
        type: Object,
        required: true,
    },
    goals: {
        type: [String],
        required: true,
    },
    plan: {
        type: String,
        required: true,
    },
    features: {
        type: [String],
        required: true,
    },
    role: {
        type: [String],
    },
    lesson: {
        type: Object,
        required: true,
    },
});

export default model<Iprojects>('Projects', projectsSchema);
