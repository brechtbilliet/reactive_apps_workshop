export type Account = Readonly<{
    firstName: string;
    lastName: string;
    login: string;
    password?: string;
}>;
