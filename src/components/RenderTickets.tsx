import Card from "./Card";
import Button from "./UI/Button";
import { Ticket } from "../types/Ticket";
import { buttonVariants, stopsEnd } from "../lib/utils";

// icons
import { RussianRuble } from "lucide-react";
import plane from "../assets/images/plane.svg";

/**
 * Components that renders ticket passed as argument
 * @param ticket - ticket data for rendering
 */
export const renderTickets = (ticket: Ticket) => {
  return (
    <Card className="bg-background-50 border-accent-500 flex justify-around divide-x-2 divide-[#c3c2c2] border">
      <div className="flex basis-1/3 flex-col items-center justify-center gap-2 pr-4">
        <div className="text-2xl font-bold">{ticket.carrier}</div>
        <Button
          className={`flex flex-col ${buttonVariants({ variant: "default", size: "default" })}`}
        >
          Купить
          <span className="flex items-center">
            за&nbsp;{ticket.price}
            <RussianRuble className="h-4 w-4" />
          </span>
        </Button>
      </div>
      <div className="basis-2/3 space-y-3 pl-4">
        <div className="flex items-center justify-around gap-4">
          <div className="text-2xl font-medium">{ticket.departure_time}</div>
          <div className="flex items-end">
            <span className="flex min-w-28 grow flex-col justify-between gap-1">
              <span className="text-center text-sm">
                {ticket.stops > 0 ? (
                  <>
                    {ticket.stops} {stopsEnd(ticket.stops)}
                  </>
                ) : (
                  <>без пересадок</>
                )}
              </span>
              <span className="flex items-center gap-1">
                <div className="flex w-full border-b-2 border-[#808080]"></div>
                <img className="h-4 w-4" src={plane} alt="plane icon" />
              </span>
            </span>
          </div>
          <div className="text-2xl font-medium">{ticket.arrival_time}</div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-sm font-medium">
              {ticket.origin}, {ticket.origin_name}
            </div>
            <div className="text-sm">{ticket.departure_date}</div>
          </div>
          <div>
            <div className="text-sm font-medium">
              {ticket.destination}, {ticket.destination_name}
            </div>
            <div className="text-sm">{ticket.arrival_date}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
