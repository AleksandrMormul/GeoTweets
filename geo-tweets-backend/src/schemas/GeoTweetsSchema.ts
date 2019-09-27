import * as mongoose from 'mongoose';

export const GeoTweetsSchema = new mongoose.Schema({
    login: String,
    password: String,
    tweet: String,
});
