import Selector from "./UI/Selector";
import { renderCurrency } from "./RenderCurrency";
import { currencys } from "../store/currencyStore";

/**
 * Currency select block
 */
const CurrencySelect = () => {
  return (
    <>
      <p className="font-medium uppercase">Валюта</p>
      <div className="flex flex-row items-start justify-start gap-1">
        <Selector items={currencys} renderItem={renderCurrency} />
      </div>
    </>
  );
};

export default CurrencySelect;
