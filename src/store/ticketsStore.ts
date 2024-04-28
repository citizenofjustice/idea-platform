import { makeAutoObservable } from "mobx";
import { Ticket } from "../types/Ticket";
import { tickets } from "../data/tickets.json";
import { PriceFilter } from "./filterStore";
import { Currency } from "../types/Currency";

const initialTickets: Ticket[] = tickets;

class Tickets {
  planeTickets: Ticket[] = tickets;

  constructor() {
    makeAutoObservable(this);
  }

  comparePrice = (
    ticketPrice: number,
    priceRange: PriceFilter,
    currency: Currency,
  ) => {
    const from = priceRange.from ? priceRange.from : 0;
    const to = priceRange.to ? priceRange.to : Infinity;
    const start = currency.priceToRub * from;
    const end = currency.priceToRub * to;
    const isInRange = start < ticketPrice && ticketPrice < end;
    return isInRange;
  };

  filterPlaneTickets = async (
    stopValues: number[],
    priceRange: PriceFilter,
    currency: Currency,
  ) => {
    try {
      if (stopValues.length === 0) {
        this.planeTickets = [];
        return;
      }
      const filteredTickets = initialTickets.filter(
        (ticket) =>
          stopValues.includes(ticket.stops) &&
          this.comparePrice(ticket.price, priceRange, currency),
      );
      this.planeTickets = filteredTickets;
    } catch (error) {
      console.error("Could not filter ticket list: ", error);
    }
  };
}

export default new Tickets();
