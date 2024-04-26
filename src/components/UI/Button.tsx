import { ButtonHTMLAttributes } from "react";
import { buttonVariants, cn } from "../../lib/utils";
import { VariantProps } from "class-variance-authority";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

/**
 * Customizable button element. Can be changed with passing button variant props
 * @param children - content for displaying inside of the button
 * @param props - native button attributes and additional buttonVariantProps
 * @returns
 */
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={cn(buttonVariants)} {...props}>
      {children}
    </button>
  );
};

export default Button;
