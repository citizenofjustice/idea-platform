import TicketsStore from "./ticketsStore";
import CurrencyStore from "./currencyStore";
import FilterStore from "./filterStore";

// root store class for uniting all stores for convenience
class RootStore {
  tickets = TicketsStore;
  currencys = CurrencyStore;
  filters = FilterStore;

  constructor() {
    // Error handling: Check if all stores are defined
    if (!this.tickets || !this.currencys || !this.filters) {
      throw new Error("One or more stores are undefined");
    }
  }
}

// Exporting an instance of the RootStore class as default
export default RootStore;
