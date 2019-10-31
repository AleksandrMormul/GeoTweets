import { Document } from 'mongoose';

export interface Twitter extends Document {
    readonly tweet: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly radius: number;
}
