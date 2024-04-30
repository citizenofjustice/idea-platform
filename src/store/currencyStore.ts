import { makeAutoObservable } from "mobx";
import { Currency, CurrencyApi } from "../types/Currency";

// declaring the currencys array with base currency
export let currencys: Currency[] = [{ type: "RUB", priceToRub: 1 }];

// declaring variable for currenctyRates stored in localStorage
let currencyRates: CurrencyApi;
// getting the stored data from localStorage
const storedRates = localStorage.getItem("currencyRates");
// if data exists parse it to JSON format
if (storedRates) currencyRates = JSON.parse(storedRates);

/**
 * Function for getting currency rates array
 * @param currencysData - currency data (fetched from the api / from localStorage)
 * @returns rates array of Currency objects
 */
const getCurrencyRates = (currencysData: CurrencyApi) => {
  try {
    const rates = [];
    // iterate through rates object and push values to the rates array
    for (const [key, value] of Object.entries(currencysData.rates)) {
      const rate: Currency = { type: key, priceToRub: 1 / Number(value) };
      // if type is USD or EUR add it to the start of array
      if (rate.type === "USD" || rate.type === "EUR") {
        rates.unshift(rate);
        continue;
      }
      rates.push(rate);
    }
    return rates;
  } catch (error) {
    console.error("Failed to format currency data: ", error);
  }
};

// function for populating currencys array with data
const loadCurrencys = async () => {
  try {
    // getting current date
    const today = new Date().toLocaleDateString();
    // getting date of currency data from localStorage
    const lastCurrencyLoadDay = new Date(
      currencyRates.timestamp * 1000,
    ).toLocaleDateString();

    // if data is existed in localStorage and if date is the same as the current one
    if (currencyRates && today === lastCurrencyLoadDay) {
      const rates = getCurrencyRates(currencyRates);
      // update the currencys array
      if (rates) currencys = [...currencys, ...rates];
      // stop function execution
      return;
    }

    // fetch currency data from third party API
    const currencysLatest = await fetch(
      "https://www.cbr-xml-daily.ru/latest.js",
    );

    // if request was successful
    if (currencysLatest.ok) {
      // parsing data to json
      const currencysData: CurrencyApi = await currencysLatest.json();
      // saving data to localStorage
      localStorage.setItem("currencyRates", JSON.stringify(currencysData));
      const rates = getCurrencyRates(currencysData);
      if (rates) currencys = [...currencys, ...rates];
    }
  } catch (error) {
    console.log("Currency data fetching has failed: ", error);
  }
};

// Calling the function for populating currencys array
await loadCurrencys();

/**
 * Class for managing current currency
 */
class Currencys {
  currentCurrency: Currency = { type: "RUB", priceToRub: 1 };

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentCurrency = (type: string) => {
    try {
      const foundCurrency = currencys.find(
        (currency) => currency.type === type,
      );
      if (foundCurrency) this.currentCurrency = foundCurrency;
    } catch (error) {
      console.log("Failed to select new currency: ", error);
    }
  };
}

export default new Currencys();
