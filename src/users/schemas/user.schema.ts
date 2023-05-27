import { Schema } from "dynamoose";

export const UserSchema = new Schema({
    id: {
        type: String,
        hashKey: true
    },
    username: {
        type: String,
    },
    role: {
        type: String
    }
})