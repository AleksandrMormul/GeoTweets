import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Tweets } from './interfaces/tweets.interface';
import { TweetsDTO } from './dto/TweetsDTO';

@Injectable()
export class TweetsService {
    constructor(
    @InjectModel('Tweets')
    private readonly twitterModel: Model<Tweets>,
) {}

    async getTweets(): Promise<Tweets[]> {
        const tweets = await this.twitterModel.find().sort('-_id').exec();
        return tweets;
    }

     async findTweets(id) {
        const tweets = await this.twitterModel.find({tweetId: id});
        if (tweets.length === 0) {
            const newTweets = this.twitterModel({tweetId: id});
            return newTweets.save();
        }
    }

    async addTweets(createTweetsDTO: TweetsDTO): Promise<Tweets> {
        const newTweets = await this.twitterModel(createTweetsDTO);
        return newTweets.save();
    }
}
