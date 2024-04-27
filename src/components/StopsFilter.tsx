import LabeledCheckbox from "./UI/LabeledCheckbox";
import { nanoid } from "nanoid";

interface StopsFilterOption {
  labelText: string;
  value: string | number;
}

const filterOptions: StopsFilterOption[] = [
  {
    labelText: "без пересадок",
    value: 0,
  },
  {
    labelText: "1 пересадка",
    value: 1,
  },
  {
    labelText: "2 пересадки",
    value: 2,
  },
  {
    labelText: "3 пересадки",
    value: 3,
  },
];

const StopsFilter = () => {
  return (
    <form className="flex flex-col items-center space-y-2">
      <p className="text-sm font-medium uppercase">Количество пересадок</p>
      <div>
        {filterOptions.map((filter) => (
          <LabeledCheckbox
            key={nanoid()}
            labelText={filter.labelText}
            value={filter.value}
          />
        ))}
      </div>
    </form>
  );
};

export default StopsFilter;
