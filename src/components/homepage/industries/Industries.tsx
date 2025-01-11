import IndustriesItem from "./IndustriesItem";
import { industriesDetails } from "@/configurations";

const Industries = () => {
  return (
    <div className="container-fluid my-5">
      <div className="  mx-auto  text-center ">
        <h1>Industries We Serve</h1>
        <p>
          Protecting Critical Industries with Cutting-Edge Cybersecurity
          Solutions
        </p>
        <div className="line-container">
          <div className="line"></div>
          <div className="icons">
            {industriesDetails.map((item, index) => {
              return (
                <IndustriesItem key={index} title={item.title} icon={item.icon} />
              )
            })}
          </div>
        </div>
        <button className="btn primaryBtn  mt-5">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Industries;
