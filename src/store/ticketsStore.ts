import { makeAutoObservable } from "mobx";

import { Ticket } from "../types/Ticket";
import { Currency } from "../types/Currency";
import { tickets } from "../data/tickets.json";
import { PriceFilter } from "../types/PriceFilter";

const initialTickets: Ticket[] = tickets;

/**
 * Class for managing tickets store
 */
class Tickets {
  planeTickets: Ticket[] = tickets;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * method for checking if price is in filter range
   * @param ticketPrice - ticket price from inital data
   * @param priceRange - price range for comparisson
   * @param currency - currency selected by user
   * @returns boolean value
   */
  checkIfPriceInRange = (
    ticketPrice: number,
    priceRange: PriceFilter,
    currency: Currency,
  ) => {
    try {
      const from = priceRange.from ? priceRange.from : 0; // if price from is undefined set from price to 0
      const to = priceRange.to ? priceRange.to : Infinity; // if price to is undefinde set to price to Infinity

      // calc start and end prices to selected currency
      const start = currency.priceToRub * from;
      const end = currency.priceToRub * to;

      // check if price is in range
      const isInRange = start < ticketPrice && ticketPrice < end;
      return isInRange;
    } catch (error) {
      console.error("Could not check if price is in range: ", error);
    }
  };

  /**
   * method for filtering plane tickets list
   * @param stopValues - stops filter values
   * @param priceRange - price filter values
   * @param currency - currency selected by user
   */
  filterPlaneTickets = async (
    stopValues: number[],
    priceRange: PriceFilter,
    currency: Currency,
  ) => {
    try {
      // if stops values are empty return empty ticket list
      if (stopValues.length === 0) {
        this.planeTickets = [];
        return;
      }
      // filter tickets by stops and price
      const filteredTickets = initialTickets.filter(
        (ticket) =>
          stopValues.includes(ticket.stops) &&
          this.checkIfPriceInRange(ticket.price, priceRange, currency),
      );
      this.planeTickets = filteredTickets;
    } catch (error) {
      console.error("Could not filter ticket list: ", error);
    }
  };
}

export default new Tickets();
