import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/create_user.dto";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { RolesGuard } from "src/common/guards/roles.guard";
import { Roles } from "src/common/roles/role.decorator";
import { Role } from "src/common/roles/role.enum";
import { IUser } from "./interface/user.interface";


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async createUser(@Body() data: IUser){
        const result = await this.userService.createUser(data);
        return result;
    }

    @Get()
    @UseGuards(AccessTokenGuard, RolesGuard)
    @Roles(Role.Admin)
    async getAllUser(){
        const users = await this.userService.getAllUser();
        return users;
    }

    @Get('/:id')
    @UseGuards(AccessTokenGuard, RolesGuard)
    @Roles(Role.Admin)
    @Roles(Role.User)
    async getOneUser(@Param('id') id: string){
        const response = await this.userService.getOneUser(id);
        return response;
    }
}
