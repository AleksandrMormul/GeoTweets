import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoTweetsModule } from './modules/geo-tweets/geo-tweets.module';
import { ConnectionDbModule } from './settings/connection-db/connection-db.module';

@Module({
  imports: [
    ConnectionDbModule,
    GeoTweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
