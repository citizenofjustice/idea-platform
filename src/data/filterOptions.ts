import { nanoid } from "nanoid";

import { StopsFilterOption } from "../types/StopsFilterOption";

// all filter options are active by default
export const filterOptions: StopsFilterOption[] = [
  {
    id: nanoid(),
    labelText: "все",
    value: "all",
    isActive: true,
  },
  {
    id: nanoid(),
    labelText: "без пересадок",
    value: 0,
    isActive: true,
  },
  {
    id: nanoid(),
    labelText: "1 пересадка",
    value: 1,
    isActive: true,
  },
  {
    id: nanoid(),
    labelText: "2 пересадки",
    value: 2,
    isActive: true,
  },
  {
    id: nanoid(),
    labelText: "3 пересадки",
    value: 3,
    isActive: true,
  },
];
