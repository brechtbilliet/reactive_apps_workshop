type AccountStructure = {
    firstName: string;
    lastName: string;
    login: string;
    password?: string;
}

export type Account = Readonly<AccountStructure>;
