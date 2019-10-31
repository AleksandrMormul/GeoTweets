import {environment} from '../../environments/environment';

const Twitter = require('twitter');

export const client = new Twitter({
    consumer_key: environment.consumer_key,
    consumer_secret: environment.consumer_secret,
    access_token_key: environment.access_token_key,
    access_token_secret: environment.access_token_secret,
});
