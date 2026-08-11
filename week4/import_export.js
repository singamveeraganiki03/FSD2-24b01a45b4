export const SERVICE_TAX = 0.10; // 10%
export const BOOKING_CHARGE = 30;
import { SERVICE_TAX, BOOKING_CHARGE } from "./Settings";
export class Booking {
    customer;
    ticketPrice;
    busNumber;
    constructor(customer, ticketPrice, busNumber) {
        this.customer = customer;
        this.ticketPrice = ticketPrice;
        this.busNumber = busNumber;
    }
    calculateAmount() {
        const tax = this.ticketPrice * SERVICE_TAX;
        return this.ticketPrice + tax + BOOKING_CHARGE;
    }
    displayTicket() {
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
const passenger = {
    customerName: "Anjali Reddy",
    customerAge: 22,
    seatType: "Window"
};
const myBooking = new Booking(passenger, 800, 505);
myBooking.displayTicket();
