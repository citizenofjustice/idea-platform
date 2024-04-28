import List from "./UI/List";
import { renderTickets } from "./RenderTickets";
import { useStore } from "../store/root-store-context";
import { observer } from "mobx-react-lite";

const TicketsList = observer(() => {
  const { tickets } = useStore();
  const { planeTickets } = tickets;

  return (
    <List
      listItems={planeTickets}
      renderItem={renderTickets}
      listEmptyMessage="Нет билетов подходящих под условия"
    />
  );
});

export default TicketsList;
