import { observer } from "mobx-react-lite";
import { useStore } from "../../store/root-store-context";
import Button from "./Button";
import { buttonVariants, cn } from "../../lib/utils";

interface LabeledCheckboxProps {
  id: string;
  isChecked: boolean;
  labelText: string;
  value: string | number;
}

const LabeledCheckbox: React.FC<LabeledCheckboxProps> = observer(
  ({ id, isChecked, labelText, value }) => {
    const { filters, tickets, currencys } = useStore();
    const { toggleStopsFilter, setOneStopsFilter, priceFilter } = filters;
    const { filterPlaneTickets } = tickets;

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      const values = await toggleStopsFilter(id, value, checked);
      filterPlaneTickets(values, priceFilter, currencys.currentCurrency);
    };

    const handleOneFilterCondition = async () => {
      const values = await setOneStopsFilter(id);
      filterPlaneTickets(values, priceFilter, currencys.currentCurrency);
    };

    return (
      <span className="group flex items-center justify-between px-2 py-1 hover:bg-secondary-300">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isChecked}
            value={value}
            onChange={handleChange}
            className="h-4 w-4"
          />
          {labelText}
        </label>
        {value !== "all" && (
          <Button
            type="button"
            className={`${cn(buttonVariants({ variant: "outline", size: "small" }))} hidden border-none text-xs font-medium uppercase text-white transition-colors hover:text-black group-hover:block`}
            onClick={handleOneFilterCondition}
          >
            Только
          </Button>
        )}
      </span>
    );
  },
);

export default LabeledCheckbox;
