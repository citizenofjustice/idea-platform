import Layout from "./components/UI/Layout";
import TicketsList from "./components/TicketsList";
import { RootStoreContext } from "./store/root-store-context";

import "./assets/styles/index.css";
import RootStore from "./store/root-store";
import ControlPanel from "./components/ControlPanel";
import { useState } from "react";
import Dialog from "./components/UI/Backdrop";
import { ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";
import useMediaQuery from "./hooks/useMediaQuery";

const rootStore = new RootStore();

function App() {
  const [isContolPanelActive, setIsContolPanelActive] = useState(false);
  const isDesktop = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <RootStoreContext.Provider value={rootStore}>
        {isContolPanelActive && <>{createPortal(<Dialog />, document.body)}</>}
        <Layout>
          <div
            className={
              isDesktop
                ? `fixed z-50 mt-10 flex w-full translate-x-[-100vw] transform justify-center px-4 opacity-0 transition-all duration-300 ${
                    isContolPanelActive ? "translate-x-[0] opacity-100" : ""
                  }`
                : "flex-start sticky top-10 flex"
            }
          >
            <ControlPanel
              handleContolPanelClose={() => setIsContolPanelActive(false)}
            />
          </div>
          <div className="flex flex-row gap-2">
            <div
              onClick={() => setIsContolPanelActive(true)}
              className={`sticky ${isContolPanelActive ? "absolute" : ""} opacity-1 top-4 h-fit w-fit rounded-md bg-background-50 py-3 hover:cursor-pointer lg:hidden`}
            >
              <ChevronRight className="h-6 w-6 text-accent-600" />
            </div>
            <TicketsList />
          </div>
        </Layout>
      </RootStoreContext.Provider>
    </>
  );
}

export default App;
