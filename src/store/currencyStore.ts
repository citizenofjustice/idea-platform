import { makeAutoObservable } from "mobx";
import { Currency } from "../types/Currency";

export const currencys: Currency[] = [
  { type: "RUB", priceToRub: 1 },
  { type: "USD", priceToRub: 92.28 },
  { type: "EUR", priceToRub: 98.71 },
];

class Currencys {
  currentCurrency: Currency = { type: "EUR", priceToRub: 98.71 };

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentCurrency = (type: "RUB" | "USD" | "EUR") => {
    const foundCurrency = currencys.find((currency) => currency.type === type);
    if (foundCurrency) this.currentCurrency = foundCurrency;
  };
}

export default new Currencys();
