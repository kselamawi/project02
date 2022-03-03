import { IPurchase } from "../interfaces/IPurchase";

export interface IUser {
    id?: string;
    first?: string;
    last?: string;
    email: string;
    password: string;
    purchases?:IPurchase;
}
