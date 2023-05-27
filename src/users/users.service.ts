import { Injectable } from "@nestjs/common";
import { InjectModel, Model } from "nestjs-dynamoose";
import { IUser, IUserKey } from "./interface/user.interface";
import { CreateUserDto } from "./dto/create_user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User')
        private userModel: Model<IUser, IUserKey> 
    ){}

    async createUser(data: CreateUserDto): Promise<IUser>{
        console.log("=============", data)
        const res = await this.userModel.create(data);
        return res;
    }

    async getOneUser(id: string): Promise<IUser>{
        console.log("id ===========", id)
        const user = await this.userModel.query('id').contains(id).exec();
        console.log("user ===========", user)
        if(user) return user.length[0];
        return null;
    }
}

