import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TwitterController } from './twitter.controller';
import { TwitterService } from './twitter.service';
import { TwitterSchema } from './schema/twitter-schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Twitter', schema: TwitterSchema }]),
  ],
  controllers: [TwitterController],
  providers: [TwitterService],
})
export class TwitterModule {}
