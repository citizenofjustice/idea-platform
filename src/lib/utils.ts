import { cva } from "class-variance-authority";
import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Function for creating different button variants
 */
export const buttonVariants = cva(
  "active:scale-95 transition duration-150 ease-in-out inline-flex items-center justify-center rounded-md transition-colors disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary-400 text-white hover:bg-secondary-600",
        outline:
          "bg-transparent border border-secondary-200 hover:bg-primary-100",
      },
      size: {
        default: "py-2 px-4",
        small: "py-1 px-2 rounded-md",
      },
      defaultVariants: {
        variant: "default",
        size: "small",
      },
    },
  },
);

/**
 * function for merging classnames
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * simple function for getting correct case declination
 * @param value - valut on which case declination is based
 * @returns string in correct case declination
 */
export function stopsEnd(value: number) {
  const strValue = value.toString();
  switch (strValue[strValue.length - 1]) {
    case "1":
      return "пересадка";
    case "2":
      return "пересадки";
    case "3":
      return "пересадки";
    case "4":
      return "пересадки";
    case "5":
      return "пересадкок";
    case "6":
      return "пересадкок";
    case "7":
      return "пересадкок";
    case "8":
      return "пересадкок";
    case "9":
      return "пересадкок";
    case "0":
      return "пересадкок";
    default:
      return "пересадок";
  }
}

/**
 * functiont that adds 0 if hours value consists of 1 digit
 * @param timeString - initial time string value
 * @returns formatted time in string format
 */
export function formatTime(timeString: string) {
  const [hours, minutes] = timeString.split(":");
  const fomattedHour = hours.length === 1 ? `0${hours}` : hours;
  return `${fomattedHour}:${minutes}`;
}
