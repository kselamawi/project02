import { ITicket } from '../interfaces/ITicket';
import { IUser } from '../interfaces/IUser';

//purchaseID and userID in the database have the stored ticket and user info we need
export interface IPurchase {
  price: number;
  ticket: ITicket[];
  owner: IUser;
}
