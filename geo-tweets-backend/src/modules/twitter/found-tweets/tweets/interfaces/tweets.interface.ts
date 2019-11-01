import { Document } from 'mongoose';

export interface Tweets extends Document {
    readonly tweetId: string;
}
