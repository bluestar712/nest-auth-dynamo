import { IsNotEmpty, IsString, IsOptional, IsEmail, IsNumber } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @IsString()
    @IsNotEmpty()
    readonly companyName: string;

    @IsNumber()
    @IsNotEmpty()
    readonly companyNumber: number;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    readonly role: string;

    @IsOptional()
    @IsString()
    readonly refreshToken?: string;
}