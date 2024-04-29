import { nanoid } from "nanoid";
import { useState } from "react";
import { observer } from "mobx-react-lite";

import ChevronAnimated from "./ChevronAnimated";

interface SelectorProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

/**
 * Seclector component with generic types with dropdown
 * @param items - array of selector elements
 * @param renderItem - function for rendering selector element
 */
const Selector = observer(
  <T extends object>({ items, renderItem }: SelectorProps<T>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // getting primary options for displaying on the top
    const mainItems = items.slice(0, 3);
    // getting additional options for displaying with the dropdown
    const additionalItems = items.slice(3, items.length - 1);

    return (
      <>
        <div
          id="currency_selector" // id for styling dropdown scrollbar in index.css
          className={`flex transform scroll-mx-4 flex-col items-center rounded-md border border-accent-500 transition-all ${isOpen ? "max-h-60 overflow-y-auto" : "max-h-14 overflow-hidden"}`}
        >
          <ul
            className={`grid grid-cols-3 gap-x-1 p-1 ${isOpen ? "h-full gap-y-1" : ""}`}
          >
            {mainItems.map((item) => (
              <li
                className="w-[50px] overflow-hidden rounded-md bg-primary-50 text-center"
                key={nanoid()}
              >
                {renderItem(item)}
              </li>
            ))}
            {isOpen &&
              additionalItems.map((item) => (
                <li
                  className="w-[50px] overflow-hidden rounded-md bg-primary-50 text-center"
                  key={nanoid()}
                >
                  {renderItem(item)}
                </li>
              ))}
          </ul>
        </div>
        <ChevronAnimated
          isActive={isOpen}
          rotate={() => setIsOpen((prevValue) => !prevValue)}
        />
      </>
    );
  },
);

export default Selector;
