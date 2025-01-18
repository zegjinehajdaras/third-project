import Image from "next/image";
import ServiceBanner from "@/components/services/ServiceBanner";
import ServiceCard from "@/components/services/ServiceCard";
import incidentResponseIcon from "../../../public/logo/servicelogo/logo-3.svg";
import { servicesDetails } from "@/configurations/servicesDetails";

const IncidentResponse = () => {
  return (
    <div>
      <ServiceBanner
        highlighttext="Incident"
        title="Response"
        paragraph="In the event of a breach, our expert team reacts swiftly to minimize damage and restore your systems quickly."
      />
      <div className="about-section bg-grey text-center pt-5">
        <h2 className="text-white">
          Key Features of <span className="highlight">Incident Response</span>{" "}
        </h2>
        <Image src={incidentResponseIcon} alt="incidentresponseicon" />

        <div className=" row row-cols-1 row-cols-md-5 justify-content-center  text-center gap-5 pt-5">
          {servicesDetails.incidentResponse.cards.map((info) => {
            return (
              <ServiceCard
                title={info.title}
                cardparagraph={info.cardparagraph}
              />
            );
          })}
        </div>
        <div className="service-info container mt-5 py-4">
          {" "}
          {servicesDetails.incidentResponse.list.map((info) => {
            return (
              <div className="mb-5">
                <h4>{info.title}</h4>
                <p className="text-start">{info.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IncidentResponse;
