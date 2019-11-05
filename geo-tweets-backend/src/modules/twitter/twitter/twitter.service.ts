import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Twitter } from './interfaces/twitter.inteface';
import { TwitterDTO } from './dto/TwitterDTO';

@Injectable()
export class TwitterService {
    constructor(
        @InjectModel('Twitter')
        private readonly twitterModel: Model<Twitter>,
    ) {}

    async getTwitterSettings() {
        const tweet = await this.twitterModel.findOne().sort('-_id').exec();
        return tweet;
    }

    async addTweet(createTweetDTO: TwitterDTO): Promise<Twitter> {
        const newTweet = await this.twitterModel(createTweetDTO);
        return newTweet.save();
    }
}
