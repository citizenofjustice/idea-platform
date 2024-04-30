import { observer } from "mobx-react-lite";

import Button from "./UI/Button";
import { renderIcon } from "./renderIcon";
import { buttonVariants } from "../lib/utils";
import useMediaQuery from "../hooks/useMediaQuery";
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
  const isMobile = useMediaQuery("(max-width: 640px)"); // media query for styling button variants

  return (
    <Button
      className={`${buttonVariants({ variant: "default", size: isMobile ? "small" : "default" })} vvsm:flex-row vsm:flex-col vvsm:w-36 flex w-28 flex-col`}
    >
      <p>Купить&nbsp;</p>
      <span className="flex items-center justify-center gap-0.5">
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
