import { Injectable } from "@nestjs/common";
import { InjectModel, Model } from "nestjs-dynamoose";
import { IUser, IUserKey } from "./interface/user.interface";
import { CreateUserDto } from "./dto/create_user.dto";
import { UpdateUserDto } from "./dto/update_user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User')
        private userModel: Model<IUser, IUserKey> 
    ){}

    async createUser(data: IUser): Promise<IUser>{
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

    async getOneByUsername(username: string): Promise<IUser>{
        console.log("username ====>", username)
        const user = await this.userModel.query("id").eq(username).exec()
        console.log("user =====>", user)
        if(user) return user[0]
        return null;
    }

    async updateUser(updateData: Partial<IUser>): Promise<IUser>{
        const user = this.userModel.update(updateData as IUser) 
        return user;
    }
}

