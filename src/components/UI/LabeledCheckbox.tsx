import { observer } from "mobx-react-lite";

import Button from "./Button";
import { buttonVariants, cn } from "../../lib/utils";
import { useStore } from "../../store/root-store-context";

interface LabeledCheckboxProps {
  id: string;
  isChecked: boolean;
  labelText: string;
  value: string | number;
}

/**
 * Copmonent for rendering checkbox fields for ticket filtering
 * @param id - input field id for getting filter values from store
 * @param isChecked - checkbox input checked state
 * @param labelText - checkbox input text description
 * @param value - checkbox input field value
 */
const LabeledCheckbox: React.FC<LabeledCheckboxProps> = observer(
  ({ id, isChecked, labelText, value }) => {
    // accessing data from store
    const { filters, tickets, currencys } = useStore();
    const { filterPlaneTickets } = tickets;
    const { toggleStopsFilter, setOneStopsFilter, priceFilter } = filters;

    /**
     * Function that that handles checked state change and filters tickets afterwards
     * @param event - checkbox change event
     */
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      const values = await toggleStopsFilter(id, value, checked);
      filterPlaneTickets(values, priceFilter, currencys.currentCurrency);
    };

    // Function that checks only one filter option and uptates tickets list
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
            className={`${cn(buttonVariants({ variant: "outline", size: "small" }))} 
              hidden border-none text-xs font-medium uppercase text-white transition-colors hover:text-black group-hover:block`}
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
