import Image from "next/image";
import ServiceBanner from "@/components/servicescomponents/ServiceBanner";
import ServiceCard from "@/components/servicescomponents/ServiceCard";
import SecurityAwarenessIcon from "../../../public/logo/servicelogo/logo-5.svg";
import { securityAwarenessInfo } from "@/configurations";
import { securityAwarenessDetailInfo } from "@/configurations";

const SecurityAwareness = () => {
  return (
    <div>
      <ServiceBanner
        highlighttext="Security "
        title="Awareness Training "
        paragraph="Empower your employees to recognize and respond to potential cyber threats. Our comprehensive security awareness programs equip your workforce with the knowledge they need to prevent attacks"
      />
      <div className="about-section bg-grey text-center pt-5">
        <h2 className="text-white">
          Key Features of{" "}
          <span className="highlight">Security Awareness Training</span>{" "}
        </h2>
        <Image src={SecurityAwarenessIcon} alt="securitylogo" />

        <div className=" row row-cols-1 row-cols-md-5 justify-content-center  text-center gap-5 pt-5">
          {securityAwarenessInfo.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                title={item.title}
                cardparagraph={item.cardparagraph}
              />
            );
          })}
        </div>
        <div className="service-info container mt-5 py-4">
          {" "}
          {securityAwarenessDetailInfo.map((item, index) => {
            return (
              <div key={index} className="mb-5">
                <h4>{item.title}</h4>
                <p className="text-start">{item.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecurityAwareness;
