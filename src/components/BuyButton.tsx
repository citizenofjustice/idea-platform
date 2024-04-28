import { RussianRuble, DollarSignIcon, EuroIcon } from "lucide-react";
import { buttonVariants } from "../lib/utils";
import Button from "./UI/Button";
import { useStore } from "../store/root-store-context";
import { observer } from "mobx-react-lite";

interface BuyButtonProps {
  price: number;
}

const renderIcon = (type: string) => {
  switch (type) {
    case "RUB":
      return <RussianRuble className="h-4 w-4" />;
    case "USD":
      return <DollarSignIcon className="h-4 w-4" />;
    case "EUR":
      return <EuroIcon className="h-4 w-4" />;
  }
};

const BuyButton: React.FC<BuyButtonProps> = observer(({ price }) => {
  const { currencys } = useStore();

  return (
    <Button
      className={`flex flex-col ${buttonVariants({ variant: "default", size: "default" })}`}
    >
      Купить
      <span className="flex w-24 items-center justify-center gap-0.5">
        за&nbsp;
        {Math.round((price / currencys.currentCurrency.priceToRub) * 100) / 100}
        {renderIcon(currencys.currentCurrency.type)}
      </span>
    </Button>
  );
});

export default BuyButton;
