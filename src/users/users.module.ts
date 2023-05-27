import { DynamooseModule } from "nestjs-dynamoose";
import { UserSchema } from "./schemas/user.schema";
import { UserService } from "./users.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        DynamooseModule.forFeature([{
            name: 'User',
            schema: UserSchema,
            options: {
                tableName: 'user'
            }
        }])
    ],
    providers: [UserService]
})
export class UserModule{}