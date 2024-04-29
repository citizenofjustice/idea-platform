import { makeAutoObservable } from "mobx";

import { PriceFilter } from "../types/PriceFilter";
import { filterOptions } from "../data/filterOptions";

/**
 * Filters class form managing tickets state
 */
class Filters {
  stopsFilter = filterOptions;
  priceFilter: PriceFilter = { from: undefined, to: undefined };

  constructor() {
    makeAutoObservable(this, {});
  }

  /**
   * method for getting active stops filter values
   * @returns number[] array of stops values
   */
  calcStopValues = async () => {
    try {
      const values: number[] = [];
      this.stopsFilter.map((filter) => {
        if (filter.isActive === true && typeof filter.value === "number")
          values.push(filter.value);
      });
      return values;
    } catch (error) {
      console.error("Could not get stops filter values: ", error);
    }
  };

  /**
   * method for managing checkboxes and getting active filters
   * @param filterId - id for finding needed filter
   * @param value - value for checking if it is "all" checkbox is toggled
   * @param checked - checked state of checkbox
   * @returns updated stops filter values
   */
  toggleStopsFilter = async (
    filterId: string,
    value: string | number,
    checked: boolean,
  ) => {
    try {
      if (value === "all") {
        // set all checkboxes states equal to "all" checked state
        const updatedStopsFilter = this.stopsFilter.map((filter) => {
          return { ...filter, isActive: checked };
        });
        this.stopsFilter = updatedStopsFilter;
      } else {
        // toggle selected checkbox state
        const updatedStopsFilter = this.stopsFilter.map((filter) =>
          filter.id === filterId
            ? { ...filter, isActive: !filter.isActive }
            : filter,
        );
        this.stopsFilter = updatedStopsFilter;
      }
      const values = await this.calcStopValues();
      return values;
    } catch (error) {
      console.error("Checkbox toggle has failed: ", error);
    }
  };

  /**
   * method for setting only one checkbox filter as active
   * @param filterId - id for finding needed filter
   * @returns updated stops filter values
   */
  setOneStopsFilter = async (filterId: string) => {
    try {
      const updatedStopsFilter = this.stopsFilter.map((filter) =>
        filter.id === filterId
          ? { ...filter, isActive: true }
          : { ...filter, isActive: false },
      );
      this.stopsFilter = updatedStopsFilter;
      const values = await this.calcStopValues();
      return values;
    } catch (error) {
      console.error("Could not set selected filter as active: ", error);
    }
  };

  /**
   * method from updating price range filter
   * @param from - price range start
   * @param to - price range end
   */
  setPriceFilter = (from: number | undefined, to: number | undefined) => {
    this.priceFilter = { from, to };
  };
}

export default new Filters();
