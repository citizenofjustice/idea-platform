import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

interface StopsFilterOption {
  id: string;
  labelText: string;
  value: string | number;
  isActive: boolean;
}

export interface PriceFilter {
  from: number | undefined;
  to: number | undefined;
}

const filterOptions: StopsFilterOption[] = [
  {
    id: nanoid(),
    labelText: "все",
    value: "all",
    isActive: true,
  },
  {
    id: nanoid(),
    labelText: "без пересадок",
    value: 0,
    isActive: true,
  },
  {
    id: nanoid(),
    labelText: "1 пересадка",
    value: 1,
    isActive: true,
  },
  {
    id: nanoid(),
    labelText: "2 пересадки",
    value: 2,
    isActive: true,
  },
  {
    id: nanoid(),
    labelText: "3 пересадки",
    value: 3,
    isActive: true,
  },
];

class Tickets {
  stopsFilter = filterOptions;
  priceFilter: PriceFilter = { from: undefined, to: undefined };

  constructor() {
    makeAutoObservable(this, {});
  }

  calcStopValues = async () => {
    const values: number[] = [];
    this.stopsFilter.map((filter) => {
      if (filter.isActive === true && typeof filter.value === "number")
        values.push(filter.value);
    });
    return values;
  };

  toggleStopsFilter = async (
    filterId: string,
    value: string | number,
    checked: boolean,
  ) => {
    if (value === "all") {
      const updatedStopsFilter = this.stopsFilter.map((filter) => {
        return { ...filter, isActive: checked };
      });
      this.stopsFilter = updatedStopsFilter;
    } else {
      const updatedStopsFilter = this.stopsFilter.map((filter) =>
        filter.id === filterId
          ? { ...filter, isActive: !filter.isActive }
          : filter,
      );
      this.stopsFilter = updatedStopsFilter;
    }
    const values = await this.calcStopValues();
    return values;
  };

  setOneStopsFilter = async (filterId: string) => {
    const updatedStopsFilter = this.stopsFilter.map((filter) =>
      filter.id === filterId
        ? { ...filter, isActive: true }
        : { ...filter, isActive: false },
    );
    this.stopsFilter = updatedStopsFilter;
    const values = await this.calcStopValues();
    return values;
  };

  setPriceFilter = (from: number | undefined, to: number | undefined) => {
    this.priceFilter = { from, to };
  };
}

export default new Tickets();
