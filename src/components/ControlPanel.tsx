import Card from "./UI/Card";
import PriceFilter from "./PriceFilter";
import StopsFilter from "./StopsFilter";
import CurrencySelect from "./CurrencySelect";

/**
 * Component for rendering sticky control panel for filtering and currency change
 */
const ControlPanel = () => {
  return (
    <Card className="sticky top-4 h-fit w-[300px] space-y-4">
      <CurrencySelect />
      <PriceFilter />
      <StopsFilter />
    </Card>
  );
};

export default ControlPanel;
