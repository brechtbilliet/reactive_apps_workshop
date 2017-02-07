type AuthenticationResultStructure = {
    token: string;
    login: string;
    firstName: string;
    lastName: string;
}

export type AuthenticationResult = Readonly<AuthenticationResultStructure>;
