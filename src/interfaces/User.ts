export interface User {
    email: string;
    password: string;
}

export interface ReceivedUser extends User {
    confirmPassword: string;
}