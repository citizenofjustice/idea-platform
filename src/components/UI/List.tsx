import { nanoid } from "nanoid";

interface ListProps<T> {
  listItems: T[];
  renderItem: (listItem: T) => React.ReactNode;
}

/**
 * Reusable list component with generic types
 * @param listItems - array of list elements
 * @param renderItem - function for rendering list element
 */
const List = <T extends object>({ listItems, renderItem }: ListProps<T>) => {
  return (
    <ul className="space-y-3">
      {listItems.map((listItem) => (
        <li key={nanoid()}>{renderItem(listItem)}</li>
      ))}
    </ul>
  );
};

export default List;
