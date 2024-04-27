import Layout from "./components/UI/Layout";
import TicketsList from "./components/TicketsList";
import { RootStoreContext } from "./store/root-store-context";

import "./assets/styles/index.css";
import RootStore from "./store/root-store";
import ControlPanel from "./components/ControlPanel";

const rootStore = new RootStore();

function App() {
  return (
    <>
      <RootStoreContext.Provider value={rootStore}>
        <Layout>
          <ControlPanel />
          <TicketsList />
        </Layout>
      </RootStoreContext.Provider>
    </>
  );
}

export default App;
