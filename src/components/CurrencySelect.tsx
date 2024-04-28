import { currencys } from "../store/currencyStore";
import { renderCurrency } from "./RenderCurrency";
import Selector from "./UI/Selector";

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
