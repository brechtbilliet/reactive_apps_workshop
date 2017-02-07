type CredentialsStructure = {
    login: string;
    password: string;
}

export type Credentials = Readonly<CredentialsStructure>