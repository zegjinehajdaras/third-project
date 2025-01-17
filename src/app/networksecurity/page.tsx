import Image from "next/image";
import ServiceBanner from "@/components/servicescomponents/ServiceBanner";
import ServiceCard from "@/components/servicescomponents/ServiceCard";
import networkIcon from "../../../public/logo/servicelogo/logo-4.svg";
import {
  networkSecurityDetailInfo,
  networkSecurityInfo,
} from "@/configurations";

const NetworkSecurity = () => {
  return (
    <div>
      <div>
        <ServiceBanner
          highlighttext="Network"
          title="Security"
          paragraph="We offer end-to-end network security solutions, optimizing your infrastructure while securing it against unauthorized access."
        />
        <div className="about-section bg-grey text-center pt-5">
          <h2 className="text-white">
            Key Features of <span className="highlight">Network Security</span>{" "}
          </h2>
          <Image src={networkIcon} alt="networkicon" />

          <div className=" row row-cols-1 row-cols-md-5 justify-content-center  text-center gap-5 pt-5">
            {networkSecurityInfo.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                cardparagraph={service.cardparagraph}
              />
            ))}
          </div>
          <div className="service-info container mt-5 py-4">
            {networkSecurityDetailInfo.map((info, index) => (
              <div key={index} className="mb-5">
                <h4>{info.title}</h4>
                <p className="text-start">{info.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkSecurity;
