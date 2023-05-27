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
        const res = await this.userModel.create(data);
        return res;
    }

    async getOneUser(id: string): Promise<Partial<IUser>>{
        const user = await this.userModel.get({id});
        return user.serialize('frontend');
    }

    async getOneByEmail(email: string): Promise<IUser>{
        const user = await this.userModel.scan("email").eq(email).exec()
        return user ? user[0] : null;
    }

    async updateUser(updateData: Partial<IUser>): Promise<IUser>{
        const user = this.userModel.update(updateData as IUser) 
        return user;
    }

    async getAllUser(): Promise<Partial<IUser>[]>{
        const allUsers = await this.userModel.scan().all().exec();
        const serializedUsers = allUsers.map((user) => user.serialize('frontend')) 
        return serializedUsers;
    }
}

