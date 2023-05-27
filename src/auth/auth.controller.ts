import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create_user.dto";
import { IUser } from "src/users/interface/user.interface";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    async signup(@Body() data: IUser){
        return this.authService.signup(data)
    }
}