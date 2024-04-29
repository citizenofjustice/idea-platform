import { observer } from "mobx-react-lite";

import Button from "./UI/Button";
import { renderIcon } from "./renderIcon";
import { buttonVariants } from "../lib/utils";
import { useStore } from "../store/root-store-context";

interface BuyButtonProps {
  price: number;
}

/**
 * Buy ticket button with price
 * @param price - price of the ticket
 */
const BuyButton: React.FC<BuyButtonProps> = observer(({ price }) => {
  // accessing currency data from store
  const { currencys } = useStore();

  return (
    <Button
      className={`flex flex-col ${buttonVariants({ variant: "default", size: "default" })}`}
    >
      Купить
      <span className="flex w-24 items-center justify-center gap-0.5">
        за&nbsp;
        {
          // Calculating price to selected currency and rounding out the result
          Math.round((price / currencys.currentCurrency.priceToRub) * 100) / 100
        }
        {renderIcon(currencys.currentCurrency.type)}
      </span>
    </Button>
  );
});

export default BuyButton;
