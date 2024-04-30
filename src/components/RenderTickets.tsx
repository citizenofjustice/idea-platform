import Card from "./UI/Card";
import { Ticket } from "../types/Ticket";
import { formatTime, stopsEnd } from "../lib/utils";

// icons
import BuyButton from "./BuyButton";
import AirlineImage from "./AirlineImage";
import plane from "../assets/images/plane.svg";

/**
 * Function that renders ticket passed as argument
 * @param ticket - ticket data for rendering
 */
export const renderTickets = (ticket: Ticket) => {
  return (
    <Card className="vsm:flex-row vsm:divide-x-2 flex flex-col justify-around gap-y-4 divide-[#c3c2c2] bg-background-50 drop-shadow-md">
      <div className="vsm:flex-col vsm:basis-1/4 vsm:pr-4 flex flex-row items-center justify-between gap-x-4 gap-y-2 sm:justify-center">
        <AirlineImage carrier={ticket.carrier} />
        <BuyButton price={ticket.price} />
      </div>
      <div className="vsm:basis-3/4 vsm:pl-4 space-y-3">
        <div className="flex items-end gap-2 sm:gap-4">
          <div className="vvsm:text-2xl flex-none text-xl font-medium sm:text-3xl">
            {formatTime(ticket.departure_time)}
          </div>
          <div className="flex grow items-end justify-center pb-2">
            <div className="flex w-full max-w-40 flex-col justify-between gap-1 font-medium text-[#676767]">
              <div className="vsm:text-sm text-center text-xs sm:min-w-28">
                {ticket.stops > 0 ? (
                  <>
                    {ticket.stops} {stopsEnd(ticket.stops)}
                  </>
                ) : (
                  <>без пересадок</>
                )}
              </div>
              <div className="flex items-center gap-1">
                <div className="w-full border-b-2 border-[#808080]" />
                <img className="h-4 w-4" src={plane} alt="plane icon" />
              </div>
            </div>
          </div>
          <div className="vvsm:text-2xl flex-none text-xl font-medium sm:text-3xl">
            {formatTime(ticket.arrival_time)}
          </div>
        </div>
        <div className="vvsm:text-sm flex justify-between gap-2 text-xs sm:text-base">
          <div className="text-start">
            <div className="font-medium">
              {ticket.origin}, {ticket.origin_name}
            </div>
            <div>{ticket.departure_date}</div>
          </div>
          <div className="text-end">
            <div className="font-medium">
              {ticket.destination}, {ticket.destination_name}
            </div>
            <div>{ticket.arrival_date}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
