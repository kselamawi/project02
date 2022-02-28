import { IUser } from "./IUser";


/*
Expected Ticket Object from server:

{
    id: "",
    price: {
        price: ""
        ageGroup: ""
    },
    movieName: "",
    showTimeDate: ""
    timeslot: ""
    user: {
        id: ""
        first: ""
        last: ""
        email: ""
    }
}
*/


export interface IPrice {
    price: string;
    ageGroup: string;
}

export interface ITicket {
    id?: number;
    price: IPrice;
    movieName: string;
    showTimeDate: string;
    timeslot: string;
    user?: IUser;
}
