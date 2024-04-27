import { cn } from "../../lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card component for UI elements
 * @param children - content of the card
 * @param className - additional css classes for card
 * @returns
 */
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`rounded-md bg-background-50 p-4 ${cn(className)}`}>
      {children}
    </div>
  );
};

export default Card;
