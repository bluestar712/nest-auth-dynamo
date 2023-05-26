import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    readonly role: string;

    @IsOptional()
    @IsString()
    readonly refreshToken: string;
}