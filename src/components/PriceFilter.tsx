import { useRef } from "react";
import { observer } from "mobx-react-lite";

import Button from "./UI/Button";
import { buttonVariants, cn } from "../lib/utils";
import { useStore } from "../store/root-store-context";

/**
 * Price filter component
 */
const PriceFilter = observer(() => {
  // accessing data from store
  const { filters, currencys, tickets } = useStore();

  // creating refs for getting current inputs values
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  // filter tickets based on the input values
  const handlePriceFiltering = async () => {
    try {
      const from = Number(fromRef.current?.value);
      const to = Number(toRef.current?.value);
      filters.setPriceFilter(from, to);
      const values = await filters.calcStopValues();
      values &&
        tickets.filterPlaneTickets(
          values,
          { from, to },
          currencys.currentCurrency,
        );
    } catch (error) {
      console.error("Error happened during the filtering process: ", error);
    }
  };

  return (
    <div className="space-y-2">
      <p className="text-start font-medium uppercase">Фильтр по цене</p>
      <form className="flex flex-row items-center justify-between gap-4">
        <div className="vvsm:flex-row flex flex-col gap-2">
          <input
            className="w-24 rounded px-2 py-1"
            type="number"
            placeholder="от"
            ref={fromRef}
            min={0}
          />
          <input
            className="w-24 rounded px-2 py-1"
            type="number"
            placeholder="до"
            ref={toRef}
            min={0}
          />
        </div>
        <Button
          type="button"
          className={`${cn(buttonVariants({ variant: "outline", size: "small" }))} h-fit w-fit`}
          onClick={handlePriceFiltering}
        >
          Применить
        </Button>
      </form>
    </div>
  );
});

export default PriceFilter;
