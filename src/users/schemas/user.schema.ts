import { Schema } from 'dynamoose';

export const UserSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
    required: true,
  },
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  companyName: {
    type: String,
  },
  companyNumber: {
    type: Number,
  },
  password: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  role: {
    type: String,
  },
});
