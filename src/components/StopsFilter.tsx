import { observer } from "mobx-react-lite";
import LabeledCheckbox from "./UI/LabeledCheckbox";
import { useStore } from "../store/root-store-context";

const StopsFilter = observer(() => {
  const { filters } = useStore();
  const { stopsFilter } = filters;

  return (
    <form className="flex w-full flex-col space-y-2">
      <p className="text-start text-sm font-medium uppercase">
        Количество пересадок
      </p>
      <div>
        {stopsFilter.map((filter) => (
          <LabeledCheckbox
            key={filter.id}
            id={filter.id}
            isChecked={filter.isActive}
            labelText={filter.labelText}
            value={filter.value}
          />
        ))}
      </div>
    </form>
  );
});

export default StopsFilter;
