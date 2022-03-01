import { ITicket } from '../interfaces/ITicket';

//purchaseID and userID in the database have the stored ticket and user info we need
export interface IPurchase {

  userID: number;
  purchaseID: number;

}
