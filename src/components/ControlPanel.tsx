import Card from "./UI/Card";
import StopsFilter from "./StopsFilter";
import CurrencySelect from "./CurrencySelect";

const ControlPanel = () => {
  return (
    <Card className="sticky top-4 h-fit w-[300px] space-y-4">
      <CurrencySelect />
      <StopsFilter />
    </Card>
  );
};

export default ControlPanel;
