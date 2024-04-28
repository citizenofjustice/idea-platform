import logoTK from "../assets/images/turkish-airlines-logo.svg";
import logoBA from "../assets/images/british-airways-logo.svg";
import logoS7 from "../assets/images/s7-airlines-logo.svg";
import logoSU from "../assets/images/aeroflot-airlines-logo.svg";

interface AirlineImageProps {
  carrier: string;
}

interface Airline {
  companyName: string;
  logo: string;
  carrierCode: string;
}

const airlines: Airline[] = [
  { companyName: "Turkish Airlines", logo: logoTK, carrierCode: "TK" },
  { companyName: "British Airways", logo: logoBA, carrierCode: "BA" },
  { companyName: "S7 Airlines", logo: logoS7, carrierCode: "S7" },
  { companyName: "Аэрофлот", logo: logoSU, carrierCode: "SU" },
];

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
        <div className="text-2xl font-bold">{carrier}</div>
      )}
    </div>
  );
};

export default AirlineImage;
