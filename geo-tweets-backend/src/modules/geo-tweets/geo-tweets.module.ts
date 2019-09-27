import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GeoTweetsSchema} from '../../schemas/GeoTweetsSchema';
import { GeoTweetsService } from './geo-tweets/geo-tweets.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'GeoTweet', schema: GeoTweetsSchema}])],
    providers: [GeoTweetsService],
})
export class GeoTweetsModule {}
