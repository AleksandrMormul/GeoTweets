import { Controller, Get, Res, HttpStatus, Post, Body, OnModuleInit} from '@nestjs/common';
import { TwitterService } from './twitter.service';
import { TwitterDTO } from './dto/TwitterDTO';
import { client } from '../twitter-client';
import { TweetsDTO } from '../found-tweets/tweets/dto/TweetsDTO';
import { TweetsService } from '../found-tweets/tweets/tweets.service';
import { InjectSchedule, Schedule } from 'nest-schedule';

@Controller('twitter')
export class TwitterController  implements OnModuleInit {
    constructor(
        @InjectSchedule() private readonly schedule: Schedule,
        private twitterService: TwitterService,
        private tweetService: TweetsService,
    ) {}

     onModuleInit(): any {
        this.schedule.scheduleCronJob('custom_cron_job', '0 1 * * * *',   async () => {
            const settings = this.twitterService.getTwitterSettings();
            const tweetsService = this.tweetService;
            settings.then(s  => {
                const km = s.radius / 1000;
                client.get(
                    'search/tweets/',
                    {q: s.tweet, count: 10, geocode: `${s.latitude},${s.longitude},${km}km`},
                    function(err, data, response) {
                        for (const id of data['statuses']) {
                            tweetsService.findTweets(id.id_str);
                        }
                    });
            });
            return false;
        });
    }

    @Post('create')
    async addTweet(@Res() res, @Body() createTweetDTO: TwitterDTO, createTweets: TweetsDTO) {
        const tweet = await this.twitterService.addTweet(createTweetDTO);
        const km = tweet.radius / 1000;
        const tweetsService = this.tweetService;
        client.get(
            'search/tweets/',
            {q: tweet.tweet, count: 10, geocode: `${tweet.latitude},${tweet.longitude},${km}km`},
            function(err, data, response) {
                for (const id of data['statuses']){
                    tweetsService.addTweets({ tweetId: id.id_str});
                }
        });

        return res.status(HttpStatus.OK).json({
            message: 'Tweet has been created successfully',
            tweet,
        });
    }

    @Get('tweets')
    async getTweets(@Res() res) {
        const tweets = await this.tweetService.getTweets();
        return res.status(HttpStatus.OK).json(tweets);
    }

    /*@Post('tweets')
    async postTweets(@Res() res) {
        console.log(res);
        const tweets = await this.twitterService.getTweets();
        return res.status(HttpStatus.OK).json(tweets);
    }*/

}
