import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    @IsString()
    id: string;

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