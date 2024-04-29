import { airlines } from "../data/airlines";

interface AirlineImageProps {
  carrier: string;
}

/**
 * Airline logo component
 * @param carrier - airline carrier code for finding its logo
 */
const AirlineImage: React.FC<AirlineImageProps> = ({ carrier }) => {
  const airlineData = airlines.find(
    (airline) => airline.carrierCode === carrier,
  );

  return (
    <div className="max-w-28 py-4">
      {airlineData ? (
        <img
          className="w-full object-fill"
          src={airlineData.logo}
          alt={airlineData.companyName}
        />
      ) : (
        // if airline image is not exists display carrier code instead
        <div className="text-2xl font-bold">{carrier}</div>
      )}
    </div>
  );
};

export default AirlineImage;
