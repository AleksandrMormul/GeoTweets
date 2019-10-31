import { Document } from 'mongoose';

export interface GeoTweet extends Document {
    readonly tweet: string;
}
