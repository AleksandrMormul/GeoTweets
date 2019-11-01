import { Module } from '@nestjs/common';
import { TweetsController } from './tweets/tweets.controller';
import { TweetsService } from './tweets/tweets.service';

@Module({
  controllers: [TweetsController],
  providers: [TweetsService]
})
export class FoundTweetsModule {}
