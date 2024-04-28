import { makeAutoObservable } from "mobx";
import { Currency, CurrencyApi } from "../types/Currency";

export let currencys: Currency[] = [{ type: "RUB", priceToRub: 1 }];

let currencyRates: CurrencyApi;
const storedRates = localStorage.getItem("currencyRates");

if (storedRates) currencyRates = JSON.parse(storedRates);

const load = async () => {
  const today = new Date().toLocaleDateString();
  const lastCurrencyLoadDay = new Date(
    currencyRates.timestamp * 1000,
  ).toLocaleDateString();

  if (currencyRates && today === lastCurrencyLoadDay) {
    const rates = [];
    for (const [key, value] of Object.entries(currencyRates.rates)) {
      const rate: Currency = { type: key, priceToRub: 1 / Number(value) };
      if (rate.type === "USD" || rate.type === "EUR") {
        rates.unshift(rate);
        continue;
      }
      rates.push(rate);
    }
    currencys = [...currencys, ...rates];
    return;
  }

  const currencysLatest = await fetch("https://www.cbr-xml-daily.ru/latest.js");

  if (currencysLatest.ok) {
    const result = await currencysLatest.json();
    localStorage.setItem("currencyRates", JSON.stringify(result));

    const rates = [];
    for (const [key, value] of Object.entries(result.rates)) {
      const rate: Currency = { type: key, priceToRub: 1 / Number(value) };
      if (rate.type === "USD" || rate.type === "EUR") {
        rates.unshift(rate);
        continue;
      }
      rates.push(rate);
    }
    currencys = [...currencys, ...rates];
  }
};

await load();

class Currencys {
  currentCurrency: Currency = { type: "RUB", priceToRub: 1 };

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentCurrency = (type: string) => {
    const foundCurrency = currencys.find((currency) => currency.type === type);
    if (foundCurrency) this.currentCurrency = foundCurrency;
  };
}

export default new Currencys();
