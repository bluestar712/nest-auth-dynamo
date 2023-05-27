import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/create_user.dto";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { RolesGuard } from "src/common/guards/roles.guard";
import { Roles } from "src/common/roles/role.decorator";
import { Role } from "src/common/roles/role.enum";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async createUser(@Body() data: CreateUserDto){
        const result = await this.userService.createUser(data);
        return result;
    }

    @Get('/:id')
    @UseGuards(AccessTokenGuard, RolesGuard)
    @Roles(Role.User)
    async getOneUser(@Param('id') id: string){
        return this.userService.getOneUser(id);
    }
}
