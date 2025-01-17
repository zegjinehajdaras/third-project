import ServiceBanner from "@/components/servicescomponents/ServiceBanner";
import ServiceCard from "@/components/servicescomponents/ServiceCard";
import { siemThreatDetectionDetailInfo } from "@/configurations";
import { siemThreatDetectionInfo } from "@/configurations";

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
          {siemThreatDetectionInfo.map((info) => (
            <ServiceCard
              title={info.title}
              cardparagraph={info.cardparagraph}
            />
          ))}
        </div>
        <div className="service-info container mt-5 py-4">
          {" "}
          {siemThreatDetectionDetailInfo.map((info) => (
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
