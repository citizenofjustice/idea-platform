import Card from "./UI/Card";
import StopsFilter from "./StopsFilter";
import CurrencySelect from "./CurrencySelect";

const ControlPanel = () => {
  return (
    <Card className="space-y-4">
      <CurrencySelect />
      <StopsFilter />
    </Card>
  );
};

export default ControlPanel;
