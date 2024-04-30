import { observer } from "mobx-react-lite";

import List from "./UI/List";
import { renderTickets } from "./renderTickets";
import { useStore } from "../store/root-store-context";

/**
 * Ticket list block
 */
const TicketsList = observer(() => {
  // accessing the tickets data from store
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
