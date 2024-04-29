import { observer } from "mobx-react-lite";

import { Currency } from "../types/Currency";
import { useStore } from "../store/root-store-context";

/**
 * Component for rendering currency selector button
 * @param currency - currency change button for currency selector
 */
const CurrencyChangeButton: React.FC<{ currency: Currency }> = observer(
  ({ currency }) => {
    // accessing currency data from store
    const { currencys } = useStore();

    // select currency as the current one
    const changeCurrency = () => {
      currencys.setCurrentCurrency(currency.type);
    };

    return (
      <div
        onClick={changeCurrency}
        className={`${currency.type === currencys.currentCurrency.type ? "bg-primary-400 text-white" : ""}
          rounded-md border border-accent-200 p-2 hover:cursor-pointer hover:bg-secondary-600 hover:text-white`}
      >
        {currency.type}
      </div>
    );
  },
);

export default CurrencyChangeButton;
