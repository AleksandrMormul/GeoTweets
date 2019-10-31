import { Controller, Get, Res, HttpStatus, Post, Body,
    Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { TwitterService } from './twitter.service';
import { TwitterDTO } from './dto/TwitterDTO';

@Controller('twitter')
export class TwitterController {
    constructor(private twitterService: TwitterService) {}

    @Post('create')
    async addTweet(@Res() res, @Body() createTweetDTO: TwitterDTO) {
        console.log('***********' + res);
        const tweet = await this.twitterService.addTweet(createTweetDTO);

        return res.status(HttpStatus.OK).json({
            message: 'Tweet has been created successfully',
            tweet,
        });
    }

    @Get('tweets')
    async getTweets(@Res() res) {
        const tweets = await this.twitterService.getTweets();
        return res.status(HttpStatus.OK).json(tweets);
    }

}
