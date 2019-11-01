import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TwitterController } from './twitter.controller';
import { TwitterService } from './twitter.service';
import { TwitterSchema } from './schema/twitter-schema';
import { TweetsController } from '../found-tweets/tweets/tweets.controller';
import { TweetsService } from '../found-tweets/tweets/tweets.service';
import { TweetsSchema } from '../found-tweets/tweets/schema/tweets-schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: 'Twitter', schema: TwitterSchema },
        { name: 'Tweets', schema: TweetsSchema},
    ]),
  ],
  controllers: [TwitterController, TweetsController],
  providers: [TwitterService, TweetsService],
})
export class TwitterModule {}
