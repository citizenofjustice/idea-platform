import { observer } from "mobx-react-lite";
import { nanoid } from "nanoid";

interface SelectorProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const Selector = observer(
  <T extends object>({ items, renderItem }: SelectorProps<T>) => {
    return (
      <ul className="grid grid-cols-3 divide-x divide-accent-500 rounded-md border border-accent-500">
        {items.map((item) => (
          <li className="text-center" key={nanoid()}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    );
  },
);

export default Selector;
