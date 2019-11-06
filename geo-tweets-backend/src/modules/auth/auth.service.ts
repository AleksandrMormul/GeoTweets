import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}
    private async validate(userData: LoginUserDto): Promise<LoginUserDto> {
        return this.usersService.findOneByEmail(userData.login);
    }

    public async login(user: LoginUserDto): Promise< any | { status: number }>{
        return this.validate(user).then((userData) => {
            if (!userData) {
                return { status: 404 };
            }
            const payload = `${userData.login}${userData._id}`;
            const accessToken = this.jwtService.sign(payload);

            return {
                expires_in: 3600,
                access_token: accessToken,
                user_id: payload,
                status: 200,
            };

        });
    }

    async validateUserByJwt(payload: JwtPayload) {
        const user = await this.usersService.findOneByEmail(payload.login);
        if (user) {
            return this.createJwtPayload(user);
        } else {
            throw new UnauthorizedException();
        }
    }

    createJwtPayload(user) {
        const data: JwtPayload = {
            login: user.login,
        };
        const jwt = this.jwtService.sign(data);
        return {
            expiresIn: 3600,
            token: jwt,
        };
    }
}
