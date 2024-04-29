import { Currency } from "../types/Currency";
import CurrencyChangeButton from "./CurrencyChangeButton";

/**
 * Function that returns rendered CurrencyChangeButton
 * @param currency - currency data
 */
export const renderCurrency = (currency: Currency) => {
  return <CurrencyChangeButton currency={currency} />;
};
