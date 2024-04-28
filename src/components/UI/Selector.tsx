import { ChevronDown } from "lucide-react";
import { observer } from "mobx-react-lite";
import { nanoid } from "nanoid";
import { useState } from "react";

interface SelectorProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const Selector = observer(
  <T extends object>({ items, renderItem }: SelectorProps<T>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const mainItems = items.slice(0, 3);
    const additionalItems = items.slice(3, items.length - 1);

    return (
      <>
        <div
          id="currency_selector"
          className={`flex transform scroll-mx-4 flex-col items-center rounded-md border border-accent-500 transition-all ${isOpen ? "max-h-60 overflow-y-auto" : "max-h-14 overflow-hidden"}`}
        >
          <ul
            className={`grid grid-cols-3 gap-x-1 p-1 ${isOpen ? "h-full gap-y-1" : ""}`}
          >
            {mainItems.map((item) => (
              <li
                className="basis-1/3 overflow-hidden rounded-md bg-primary-50 text-center"
                key={nanoid()}
              >
                {renderItem(item)}
              </li>
            ))}
            {isOpen &&
              additionalItems.map((item) => (
                <li
                  className="basis-1/3 overflow-hidden rounded-md bg-primary-50 text-center"
                  key={nanoid()}
                >
                  {renderItem(item)}
                </li>
              ))}
          </ul>
        </div>
        <ChevronDown
          onClick={() => setIsOpen((prevValue) => !prevValue)}
          className={`h-10 w-10 transform p-2 text-accent-600 transition-all hover:cursor-pointer ${isOpen ? "rotate-180" : ""}`}
        />
      </>
    );
  },
);

export default Selector;
