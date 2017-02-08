import {Wine} from "../../stock/entities/Wine";
import {Account} from "../../authentication/types/Account";

export type DataState = Readonly<{
    authentication: AuthenticationDataState;
    wines: Array<Wine>;
}>;

export type AuthenticationDataState = Readonly<{
    isAuthenticated: boolean;
    jwtToken: string;
    account: Account;
}>;