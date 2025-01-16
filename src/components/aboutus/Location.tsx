import Image from "next/image";
import { locations } from "@/configurations";

const Location = () => {
  return (
    <div>
      {" "}
      <div className="container-fluid p-4 bg-location">
        {" "}
        <h1>
          <span className="text-white ">Our</span> Locations{" "}
        </h1>
        <div className="text-white row row-cols-1 row-cols-md-4  justify-content-between ">
          {locations.map((location, index) => {
            return (
              <div className=" flex-col align-items-center">
                <h6 className="text-white pt-5   ">{location.country}</h6>
                <Image src={location.icon} alt={location.address} />
                <p>{location.address}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Location;
