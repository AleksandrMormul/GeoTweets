import * as mongoose from 'mongoose';

export const TwitterSchema = new mongoose.Schema({
    tweet: String,
    latitude: Number,
    longitude: Number,
    radius: Number,
});
