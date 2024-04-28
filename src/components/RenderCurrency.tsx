import { Currency } from "../types/Currency";
import CurrencyChangeButton from "./CurrencyChangeButton";

export const renderCurrency = (currency: Currency) => {
  return <CurrencyChangeButton currency={currency} />;
};
