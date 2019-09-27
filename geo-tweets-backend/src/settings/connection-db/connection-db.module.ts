import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../../environments/environment';

@Module({
    imports: [MongooseModule.forRootAsync({
        useFactory: () => ({
            uri: environment.dbHost,
        }),
    })],
})
export class ConnectionDbModule {}
