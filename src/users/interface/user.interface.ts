export interface IUserKey{
    id: string;
}

export interface IUser extends IUserKey{
    username: string;
    password: string;
    role: string;
    refreshToken: string;
}