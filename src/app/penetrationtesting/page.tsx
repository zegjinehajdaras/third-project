import Image from "next/image";
import ServiceBanner from "@/components/servicescomponents/ServiceBanner";
import ServiceCard from "@/components/servicescomponents/ServiceCard";
import { penetrationTestingInfo } from "@/configurations";
import { penetrationTestingDetailInfo2 } from "@/configurations";
import PenetrationIcon from "../../../public/logo/servicelogo/logo-2.svg";
const PenetrationTesting = () => {
  return (
    <div>
      <ServiceBanner
        highlighttext="Penetration "
        title="Testing"
        paragraph="Identify and eliminate vulnerabilities in your network with our comprehensive penetration testing services."
      />
      <div className="about-section bg-grey text-center pt-5 ">
        <h2 className="text-white">
          Key Features of <span className="highlight">Penetration Testing</span>{" "}
        </h2>
        <Image src={PenetrationIcon} alt="Penetration Testing" />

        <div className=" row row-cols-1 row-cols-md-5 justify-content-center  text-center gap-5 pt-5">
          {penetrationTestingInfo.map((service, index) => {
            return (
              <ServiceCard
                key={index}
                title={service.title}
                cardparagraph={service.cardparagraph}
              />
            );
          })}
        </div>
        <div className="service-info container mt-5 py-4">
          {" "}
          {penetrationTestingDetailInfo2.map((info) => {
            return (
              <div className="mb-5">
                <h4>{info.title}</h4>
                <p className="text-start"> {info.paragraph}</p>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PenetrationTesting;
