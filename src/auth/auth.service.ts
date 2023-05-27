import { BadRequestException, ForbiddenException, Injectable } from "@nestjs/common";
import { UserService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { CreateUserDto } from "src/users/dto/create_user.dto";
import * as bcrypt from 'bcrypt';
import { IUser } from "src/users/interface/user.interface";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ){}

    async signup(data: IUser): Promise<any>{
        const userExists = await this.userService.getOneByUsername(data.username);
        if (userExists){
            throw new BadRequestException('User already exist');
        }

        const hashedPassword = await this.hashData(data.password);

        const newUser = await this.userService.createUser({
            ...data,
            id: data.username,
            password: hashedPassword,
            refreshToken: ""
        })
        const tokens = await this.getTokens(newUser.id, newUser.username, newUser.role);
        await this.updateRefreshToken(newUser.id, tokens.refreshToken);
        return tokens;
    }

    async hashData(data: string){
        const saltOrRounds = 10;
        const hashedData = await bcrypt.hash(data, saltOrRounds);
        return hashedData;
    }

    async getTokens(userId: string, username: string, role: string){
        const [accessToken, refreshToken] = await Promise.all([
           this.jwtService.signAsync(
                {
                    sub: userId,
                    username,
                    role
                },
                {
                    secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
                    expiresIn: '15m',
                }
           ),
           this.jwtService.signAsync(
                {
                    sub: userId,
                    username,
                    role
                },
                {
                    secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
                    expiresIn: '7d',
                }
           )
        ]);
        
        return {
            accessToken,
            refreshToken
        }
    }

    async updateRefreshToken(userId: string, refreshToken: string){
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.userService.updateUser({id: userId, refreshToken: hashedRefreshToken})
    }
}