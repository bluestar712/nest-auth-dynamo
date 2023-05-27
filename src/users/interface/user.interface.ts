export interface IUserKey{
    id: string;
}

export interface IUser extends IUserKey{
    email: string;
    firstName: string;
    lastName: string;
    companyNumber: number,
    companyName: string,
    password: string;
    role: string;
    refreshToken: string;
}