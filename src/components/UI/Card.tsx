import { cn } from "../../lib/utils";

interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card component for UI elements
 * @param children - content of the card
 * @param className - additional css classes for card
 * @returns
 */
const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={`vvsm:p-4 rounded-md bg-background-50 p-3 ${cn(className)}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
