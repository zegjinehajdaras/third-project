
import ServicesItem from "./ServicesItem";
import { servicesDetails } from "@/configurations";

const Services = () => {

  return (
    <>
      <hr className="horizontaLine" />
      <div className=" services-section container-fluid bg-grey">
        <h1 className="text-primary-color text-center pt-5">Services</h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4  gap-4 justify-content-center">\
            {servicesDetails.slice(0, 3).map((service, index) => {
              return (
                <ServicesItem key={index} icon={service.logo}
                  title={service.title}
                  paragraph={service.description} />
              )
            })}
          </div>
          <div className="row row-cols-1 row-cols-md-4 justify-content-center gap-4 ">
            {servicesDetails.slice(3).map((service, index) => {
              return (
                <ServicesItem key={index} icon={service.logo}
                  title={service.title}
                  paragraph={service.description} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
