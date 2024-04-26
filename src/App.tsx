import List from "./components/UI/List";
import { Ticket } from "./types/Ticket";
import Layout from "./components/Layout";
import { renderTickets } from "./components/RenderTickets";

import "./assets/styles/index.css";

import { tickets } from "./data/tickets.json";

// getting tickets data from the .json file
const ticketList: Ticket[] = tickets;

function App() {
  return (
    <>
      <Layout>
        <List listItems={ticketList} renderItem={renderTickets} />
      </Layout>
    </>
  );
}

export default App;
