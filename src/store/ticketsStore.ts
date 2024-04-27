import { action, makeAutoObservable } from "mobx";
import { Ticket } from "../types/Ticket";
import { tickets } from "../data/tickets.json";

const initialTickets: Ticket[] = tickets;

class Tickets {
  planeTickets: Ticket[] = tickets;
  stopsFilter: number[] = [];

  constructor() {
    makeAutoObservable(this, { setStopsFilter: action });
  }

  filterPlaneTickets = () => {
    try {
      if (this.stopsFilter.length === 0) {
        this.planeTickets = initialTickets;
        return;
      }
      const filteredTickets = initialTickets.filter((ticket) =>
        this.stopsFilter.includes(ticket.stops),
      );
      this.planeTickets = filteredTickets;
    } catch (error) {
      console.error("Could not filter ticket list: ", error);
    }
  };

  setStopsFilter = (isChecked: boolean, option: number) => {
    try {
      if (isChecked) {
        const addedFilter =
          this.stopsFilter.length > 0
            ? [...this.stopsFilter, option]
            : [option];
        this.stopsFilter = addedFilter;
      } else {
        const removedFilter = this.stopsFilter.filter(
          (stop) => stop !== option,
        );
        this.stopsFilter = removedFilter;
      }
      this.filterPlaneTickets();
    } catch (error) {
      console.error("Could not update tickets filter: ", error);
    }
  };
}

export default new Tickets();
