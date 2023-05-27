import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create_user.dto";
import { IUser } from "src/users/interface/user.interface";
import { AuthDto } from "./dto/auth.dto";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    async signup(@Body() data: CreateUserDto){
        return this.authService.signup(data);
    }

    @Post('signin')
    async signin(@Body() data: AuthDto) {
        return this.authService.signIn(data);
    }

}