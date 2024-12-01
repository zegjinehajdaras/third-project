import ServiceBanner from "@/components/servicescomponents/ServiceBanner";
import ServiceCard from "@/components/servicescomponents/ServiceCard";
import { useRouter } from "next/router";
import React from "react";

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
        <svg
          width="39"
          height="49"
          viewBox="0 0 39 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6393 20.3872L20.0716 18.2256L20.5039 20.3872C21.3024 24.3795 24.4229 27.5 28.4156 28.2985L30.5772 28.7308L28.4156 29.1631C24.4233 29.9616 21.3024 33.0821 20.5039 37.0749L20.0716 39.2364L19.6393 37.0749C18.8408 33.0826 15.7203 29.9616 11.7279 29.1631L9.5664 28.7308L11.7279 28.2985C15.7203 27.5 18.8408 24.3795 19.6393 20.3872ZM36.7926 6.31398L19.196 1.59904L1.59946 6.31398V26.9742C1.59946 30.1217 2.37643 33.0413 3.83179 35.5622C5.29009 38.0882 7.42972 40.2224 10.1512 41.7936H10.1542L19.196 47.0138L28.2378 41.7936H28.2408C30.9623 40.2224 33.1015 38.0882 34.5602 35.5622L34.5615 35.5631C36.016 33.0425 36.7926 30.123 36.7926 26.9742V6.31398ZM19.4025 0L38.3929 5.08826V26.9742C38.3929 30.4002 37.5396 33.5911 35.9419 36.3594V36.3624C34.347 39.1243 32.0098 41.4574 29.0371 43.1735L29.038 43.1748L19.196 48.8568L9.35446 43.1748L9.35531 43.1735C6.38308 41.4569 4.04583 39.1243 2.45101 36.3624C0.852819 33.5945 0 30.4023 0 26.9742V5.08826L18.9904 0H19.4029H19.4025ZM28.6819 11.9424L28.826 11.2219L28.9701 11.9424C29.2364 13.2735 30.2763 14.3134 31.6074 14.5797L32.3279 14.7238L31.6074 14.8679C30.2768 15.1337 29.2364 16.1741 28.9701 17.5051L28.826 18.2256L28.6819 17.5051C28.4156 16.1741 27.3757 15.1342 26.0447 14.8679L25.3242 14.7238L26.0447 14.5797C27.3753 14.3134 28.4156 13.2735 28.6819 11.9424ZM11.101 10.5519L11.3171 9.47118L11.5333 10.5519C11.9327 12.5479 13.493 14.1086 15.4889 14.5076L16.5697 14.7238L15.4889 14.9399C13.4926 15.3389 11.9323 16.8996 11.5333 18.8956L11.3171 19.9764L11.101 18.8956C10.702 16.8992 9.14126 15.3389 7.14531 14.9399L6.06454 14.7238L7.14531 14.5076C9.14126 14.1082 10.702 12.5479 11.101 10.5519Z"
            fill="#D9D9D9"
          />
        </svg>

        <div className=" row row-cols-1 row-cols-md-5  justify-content-center  text-center gap-5 pt-5">
          <ServiceCard
            title="Data Aggregation"
            cardparagraph="SIEM solutions collect event data from diverse sources, including user activities, endpoints, applications, and security hardware like firewalls and antivirus software. . "
          />
          <ServiceCard
            title="Event Correlation"
            cardparagraph="By correlating related events, SIEM systems can identify patterns that may indicate potential threats. "
          />
          <ServiceCard
            title="Real-Time Monitoring"
            cardparagraph="SIEM tools provide near-real-time analysis of security alerts, enabling security teams to respond swiftly to incidents. . "
          />
          <ServiceCard
            title="Automated Responsens"
            cardparagraph="Many SIEM solutions incorporate automation features that can respond to certain types of threats automatically.  "
          />
        </div>
        <div className="service-info container mt-5 py-4">
          {" "}
          <div className="mb-5">
            <h4>Overview of SIEM in Threat Detection and Response</h4>
            <p className="text-start">
              Security Information and Event Management (SIEM) systems play a
              crucial role in modern cybersecurity strategies by aggregating and
              analyzing log data from various sources within an organization's
              IT infrastructure. These systems are designed to detect,
              investigate, and respond to security threats in real-time,
              enhancing overall security posture.
            </p>
          </div>
          <div className="mb-5">
            {" "}
            <h4>Threat Detection and Response (TDR)</h4>
            <p className=" text-start">
              Threat Detection and Response encompasses a broader strategy that
              includes not only SIEM but also other technologies such as
              Endpoint Detection and Response (EDR) and Threat Intelligence
              Platforms (TIPs). The TDR process typically involves: Proactive
              Threat Hunting: Actively searching for potential threats before
              they can cause damage, which requires a deep understanding of
              normal network behavior Incident Response: Implementing structured
              steps to address detected threats, including identification,
              containment, eradication, recovery, and post-incident analysis
            </p>
          </div>
          <div className="mb-5">
            <h4>Best Practices for Implementation</h4>
            <p className="text-start">
              Continuous Monitoring: Organizations should implement ongoing
              monitoring of their networks and systems to detect threats early
              __ Regular Updates: Keeping threat intelligence updated enhances
              detection capabilities against evolving cyber threats
              Multi-Layered Security Approach: Combining SIEM with other
              security measures such as EDR and TIPs creates a more robust
              defense against cyber attacks Incident Response Planning:
              Developing a detailed incident response plan ensures that
              organizations can react efficiently to security incidents when
              they occur Leverage Automation: Utilizing automated tools enhances
              the speed and effectiveness of both threat detection and response
              efforts
            </p>
          </div>
          <div>
            <h4>Conclusion</h4>
            <p className="text-start">
              SIEM solutions are integral to effective threat detection and
              response strategies in cybersecurity. By leveraging advanced
              analytics, real-time monitoring, and automation capabilities,
              organizations can significantly improve their ability to detect
              and respond to cyber threats swiftly and efficiently. Implementing
              best practices in conjunction with SIEM technologies further
              strengthens an organization's overall security framework against
              increasingly sophisticated cyber threats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiemThreatService;
