import {Wine} from "../../stock/entities/Wine";
import {Account} from "../../authentication/types/Account";

interface DataStateStructure {
    authentication: AuthenticationDataState;
    wines: Array<Wine>;
}

export type DataState = Readonly<DataStateStructure>;

interface AuthenticationDataStateStructure {
    isAuthenticated: boolean;
    jwtToken: string;
    account: Account;
}

export type AuthenticationDataState = Readonly<AuthenticationDataStateStructure>;