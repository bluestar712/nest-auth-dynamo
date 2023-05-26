import { Schema } from "dynamoose";

export const User = new Schema({
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