import { IsNotEmpty, IsString } from "class-validator";

export class AuthDto{
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}