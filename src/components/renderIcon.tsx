import { RussianRuble, DollarSignIcon, EuroIcon } from "lucide-react";

/**
 * Function for rerndering currency icon based on its type
 * @param type - currency name
 */
export const renderIcon = (type: string) => {
  switch (type) {
    case "RUB":
      return <RussianRuble className="h-4 w-4" />;
    case "USD":
      return <DollarSignIcon className="h-4 w-4" />;
    case "EUR":
      return <EuroIcon className="h-4 w-4" />;
  }
};
