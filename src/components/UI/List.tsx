import { nanoid } from "nanoid";

import Card from "./Card";

interface ListProps<T> {
  listItems: T[];
  renderItem: (listItem: T) => React.ReactNode;
  listEmptyMessage: string;
}

/**
 * Reusable list component with generic types
 * @param listItems - array of list elements
 * @param renderItem - function for rendering list element
 * @param listEmptyMessage - message that appears if list is empty
 */
const List = <T extends object>({
  listItems,
  renderItem,
  listEmptyMessage,
}: ListProps<T>) => {
  return (
    <ul className="space-y-3">
      {listItems.length > 0 ? (
        <>
          {listItems.map((listItem) => (
            <li key={nanoid()}>{renderItem(listItem)}</li>
          ))}
        </>
      ) : (
        <li>
          <Card>{listEmptyMessage}</Card>
        </li>
      )}
    </ul>
  );
};

export default List;
