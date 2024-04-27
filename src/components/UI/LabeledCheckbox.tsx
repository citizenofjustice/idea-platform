import { observer } from "mobx-react-lite";
import { useStore } from "../../store/root-store-context";
import { useState } from "react";

interface LabeledCheckboxProps {
  labelText: string;
  value: string | number;
}

const LabeledCheckbox: React.FC<LabeledCheckboxProps> = observer(
  ({ labelText, value }) => {
    const { tickets } = useStore();
    const { setStopsFilter } = tickets;
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked, value } = event.target;
      setIsChecked(checked);
      const numValue = Number(value);
      setStopsFilter(checked, numValue);
    };

    return (
      <>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isChecked}
            value={value}
            onChange={handleChange}
          />
          {labelText}
        </label>
      </>
    );
  },
);

export default LabeledCheckbox;
