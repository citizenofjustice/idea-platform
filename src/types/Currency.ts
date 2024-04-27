import { Currency } from "lucide-react";

export interface Currency {
  type: "RUB" | "USD" | "EUR";
  priceToRub: number;
}
