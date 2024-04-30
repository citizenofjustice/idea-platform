import Selector from "./UI/Selector";
import { renderCurrency } from "./renderCurrency";
import { useStore } from "../store/root-store-context";
import { observer } from "mobx-react-lite";
import { useCallback, useEffect } from "react";

/**
 * Currency select block
 */
const CurrencySelect = observer(() => {
  const { currencys } = useStore();
  const { loadCurrencys } = currencys;

  const currencyRatesFill = useCallback(async () => {
    await loadCurrencys();
  }, [loadCurrencys]);

  useEffect(() => {
    currencyRatesFill();
  }, [currencyRatesFill]);

  return (
    <span>
      <p className="font-medium uppercase">Валюта</p>
      <div className="flex flex-row items-start justify-start gap-1">
        <Selector items={currencys.currencys} renderItem={renderCurrency} />
      </div>
    </span>
  );
});

export default CurrencySelect;
