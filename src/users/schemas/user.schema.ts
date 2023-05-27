import { Schema } from "dynamoose";

export const UserSchema = new Schema({
    id: {
        type: String,
        hashKey: true,
        required: true
    },
    user_id: {
        type: Number,
        rangeKey: true,
    },
    username: {
        type: String,
    },
    role: {
        type: String
    },
    password: {
        type: String
    },
    refreshToken: {
        type: String
    }

})