import { observer } from "mobx-react-lite";
import { buttonVariants, cn } from "../lib/utils";
import { useStore } from "../store/root-store-context";
import Button from "./UI/Button";
import { useRef } from "react";

const PriceFilter = observer(() => {
  const { filters, currencys, tickets } = useStore();
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  const handlePriceFiltering = async () => {
    const from = Number(fromRef.current?.value);
    const to = Number(toRef.current?.value);
    filters.setPriceFilter(from, to);
    const values = await filters.calcStopValues();
    tickets.filterPlaneTickets(values, { from, to }, currencys.currentCurrency);
  };

  return (
    <>
      <p className="text-start font-medium uppercase">Фильтр по цене</p>
      <form className="flex flex-row justify-between gap-4">
        <div className="space-x-2">
          <input
            className="w-16 rounded px-2 py-1"
            type="number"
            placeholder="от"
            ref={fromRef}
          />
          <input
            className="w-16 rounded px-2 py-1"
            type="number"
            placeholder="до"
            ref={toRef}
          />
        </div>
        <Button
          type="button"
          className={`${cn(buttonVariants({ variant: "outline", size: "small" }))} w-fit`}
          onClick={handlePriceFiltering}
        >
          Применить
        </Button>
      </form>
    </>
  );
});

export default PriceFilter;
