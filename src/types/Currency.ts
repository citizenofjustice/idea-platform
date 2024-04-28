import { Currency } from "lucide-react";

export interface Currency {
  type: string;
  priceToRub: number;
}

interface KeyPair<T, U> {
  key: T;
  value: U;
}

export interface CurrencyApi {
  base: string;
  date: string;
  disclaimer: string;
  rates: KeyPair<string, number>;
  timestamp: number;
}
