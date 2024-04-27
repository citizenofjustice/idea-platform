import { Currency } from "../types/Currency";

export const renderCurrency = (currency: Currency) => {
  return <div className="p-2 hover:cursor-pointer">{currency.type}</div>;
};
