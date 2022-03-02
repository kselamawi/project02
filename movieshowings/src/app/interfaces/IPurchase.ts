import { ITicket } from '../interfaces/ITicket';
import { IUser } from '../interfaces/IUser';

//purchaseID and userID in the database have the stored ticket and user info we need
export interface IPurchase {

  userID: number;
  purchaseID: number;
  ticketID: number;
 
  price: number;
  movieTitle: string;
  genre: string;
  releaseDate: string;
  showTimeDate: string;
  timeslot: string;
  user?: IUser;
  addToPurchase?: boolean;
  numberTickets: number;

}
