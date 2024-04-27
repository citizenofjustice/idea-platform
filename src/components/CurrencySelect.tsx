import { currencys } from "../store/currencyStore";
import { renderCurrency } from "./RenderCurrency";
import Selector from "./UI/Selector";

const CurrencySelect = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <p className="font-medium uppercase">Валюта</p>
      <Selector items={currencys} renderItem={renderCurrency} />
    </div>
  );
};

export default CurrencySelect;
