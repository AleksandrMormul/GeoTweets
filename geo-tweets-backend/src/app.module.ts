import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoTweetsModule } from './modules/geo-tweets/geo-tweets.module';
import { ConnectionDbModule } from './settings/connection-db/connection-db.module';
import { UsersController } from './modules/users/users.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TwitterModule } from './modules/twitter/twitter/twitter.module';
import { ScheduleModule } from 'nest-schedule';

export function getToken(): string {
  return localStorage.getItem('token');
}

@Module({
  imports: [
    ConnectionDbModule,
    GeoTweetsModule,
    AuthModule,
    UsersModule,
    TwitterModule,
    ScheduleModule.register(),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
