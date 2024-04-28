import { observer } from "mobx-react-lite";
import { useStore } from "../store/root-store-context";
import { Currency } from "../types/Currency";

const CurrencyChangeButton: React.FC<{ currency: Currency }> = observer(
  ({ currency }) => {
    const { currencys } = useStore();

    const changeCurrency = () => {
      currencys.setCurrentCurrency(currency.type);
    };
    return (
      <div
        onClick={changeCurrency}
        className={`${currency.type === currencys.currentCurrency.type ? "bg-primary-400 text-white" : ""} p-2 hover:cursor-pointer hover:bg-secondary-600 hover:text-white`}
      >
        {currency.type}
      </div>
    );
  },
);

export default CurrencyChangeButton;
