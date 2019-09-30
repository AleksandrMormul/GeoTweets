import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './user.schema';

const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
        passportModule,
    ],
    exports: [UsersService],
    controllers: [UsersController],
    providers: [UsersService],
})

export class UsersModule {}
