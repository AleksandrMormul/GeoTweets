import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Twitter } from './interfaces/twitter.inteface';
import { TwitterDTO } from './dto/TwitterDTO';
import { client } from '../twitter-client';

@Injectable()
export class TwitterService {
    constructor(
        @InjectModel('Twitter')
        private readonly twitterModel: Model<Twitter>,
    ) {}

    async getTweets(): Promise<Twitter[]> {
        const tweets = await this.twitterModel.find().exec();
        return tweets;
    }

    async addTweet(createTweetDTO: TwitterDTO): Promise<Twitter> {
        const newTweet = await this.twitterModel(createTweetDTO);
        return newTweet.save();
    }
}
