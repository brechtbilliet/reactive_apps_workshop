import {Account} from "../../authentication/types/Account";
export interface AuthenticationDataState {
    isAuthenticated: boolean;
    jwtToken: string;
    account: Account;
}