import Selector from "./UI/Selector";
import { renderCurrency } from "./renderCurrency";
import { currencys } from "../store/currencyStore";

/**
 * Currency select block
 */
const CurrencySelect = () => {
  return (
    <span>
      <p className="font-medium uppercase">Валюта</p>
      <div className="flex flex-row items-start justify-start gap-1">
        <Selector items={currencys} renderItem={renderCurrency} />
      </div>
    </span>
  );
};

export default CurrencySelect;
