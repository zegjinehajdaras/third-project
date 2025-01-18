import ServiceBanner from "@/components/services/ServiceBanner";
import ServiceCard from "@/components/services/ServiceCard";
import { servicesDetails } from "@/configurations/servicesDetails";

const SiemThreatService = () => {
  return (
    <div>
      <ServiceBanner
        highlighttext="SIEM "
        title=" Threat Detection & Response: "
        paragraph="Our 24/7 monitoring services use AI-powered tools to detect and neutralize threats before they can harm your business."
      />
      <div className="about-section bg-grey text-center pt-5">
        <h2 className="text-white">
          Key Features of <span className="highlight">SIEM</span>{" "}
        </h2>

        <div className=" row row-cols-1 row-cols-md-5  justify-content-center  text-center gap-5 pt-5">
          {servicesDetails.siem.cards.map((info) => (
            <ServiceCard
              title={info.title}
              cardparagraph={info.cardparagraph}
            />
          ))}
        </div>
        <div className="service-info container mt-5 py-4">
          {servicesDetails.siem.list.map((info) => (
            <div className="mb-5">
              <h4>{info.title}</h4>
              <p className="text-start">{info.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiemThreatService;
