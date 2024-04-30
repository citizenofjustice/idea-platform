import Card from "./UI/Card";
import PriceFilter from "./PriceFilter";
import StopsFilter from "./StopsFilter";
import CurrencySelect from "./CurrencySelect";
import { useOutsideClick } from "../hooks/useOutsideClick";

interface ControlPanelProps {
  handleContolPanelClose: () => void;
}

/**
 * Component for rendering sticky control panel for filtering and currency change
 */
const ControlPanel: React.FC<ControlPanelProps> = ({
  handleContolPanelClose,
}) => {
  const ref = useOutsideClick(handleContolPanelClose); // for listening of outside click

  return (
    <div ref={ref}>
      <Card className="sticky top-4 h-fit max-w-sm space-y-4 drop-shadow-md">
        <CurrencySelect />
        <PriceFilter />
        <StopsFilter />
      </Card>
    </div>
  );
};

export default ControlPanel;
