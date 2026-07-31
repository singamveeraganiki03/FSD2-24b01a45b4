export const SERVICE_TAX: number = 0.10; // 10%
export const BOOKING_CHARGE: number = 30;
export interface Customer {
    customerName: string;
    customerAge: number;
    seatType?: "Window" | "Middle" | "Aisle";
}
import { SERVICE_TAX, BOOKING_CHARGE } from "./Settings";
import { Customer } from "./Customer";

export class Booking {

    constructor(
        public customer: Customer,
        private ticketPrice: number,
        public busNumber: number
    ) { }

    public calculateAmount(): number {
        const tax = this.ticketPrice * SERVICE_TAX;
        return this.ticketPrice + tax + BOOKING_CHARGE;
    }

    public displayTicket(): void {
        console.log("------ Bus Ticket ------");
        console.log(`Customer Name : ${this.customer.customerName}`);
        console.log(`Customer Age  : ${this.customer.customerAge}`);
        console.log(`Seat Type     : ${this.customer.seatType}`);
        console.log(`Bus Number    : ${this.busNumber}`);
        console.log(`Final Amount  : ₹${this.calculateAmount()}`);
        console.log("------------------------");
    }
}
import { Booking } from "./Booking";
import { Customer } from "./Customer";

const passenger: Customer = {
    customerName: "Anjali Reddy",
    customerAge: 22,
    seatType: "Window"
};

const myBooking = new Booking(passenger, 800, 505);

myBooking.displayTicket();