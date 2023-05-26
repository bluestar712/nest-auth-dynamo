export interface IUserKey{
    id: string;
}

export interface IUser extends IUserKey{
    username: string;
    role: string;
}