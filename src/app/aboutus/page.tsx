import AboutUsBanner from "@/components/aboutus/AboutUsBanner";
import AboutUsCard from "@/components/aboutus/AboutUsCard";
import Advisor from "@/components/aboutus/Advisor";
import CertificateCard from "@/components/aboutus/CertificateCard";
import ChooseUs from "@/components/aboutus/ChooseUs";
import CybersecuritySpec from "@/components/aboutus/CybersecuritySpec";
import Founders from "@/components/aboutus/Founders";
import Location from "@/components/aboutus/Location";
import Cards from "@/components/homepage/leadership/LeadershipItem";

import { aboutUsInfo1 } from "@/configurations";
import { aboutUsInfo2 } from "@/configurations";

const AboutUsPage = () => {
  return (
    <section className="about-us">
      <div className=" about-us-banner ">
        <div className="container">
          <AboutUsBanner />
        </div>
      </div>
      <div className=" container  ">
        <div className="row  d-flex justify-content-center  about-us-card gap-4 ">
          {aboutUsInfo1.map((info, index) => {
            return (
              <AboutUsCard
                key={index}
                icon={info.icon}
                title={info.title}
                paragraph={info.paragraph}
              />
            );
          })}
          <div className="row d-flex justify-content-center gap-4 ">
            {aboutUsInfo2.map((info, index) => {
              return (
                <AboutUsCard
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  paragraph={info.paragraph}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-5   ">
        <Location />
      </div>
      <div>
        <Founders />
      </div>

      <CybersecuritySpec />

      <div className="container p-4">
        <Advisor />
      </div>
      <div className="container-fluid bg-grey text-center p-4">
        <div className=" container">
          <h1>Our Certification</h1>
          <div className="row row-cols-1 row-cols-md-4 gap-3 mb-4 justify-content-center">
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
          </div>
          <div className="row row-cols-1 row-cols-md-4 gap-3 justify-content-center">
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
          </div>
        </div>
      </div>
      <div className="container mt-5 mx-auto">
        <h2 className="black-header text-center mb-5">
          Discover why our clients continue to choose us.
        </h2>
        <div className=" justify-content-center ">
          <ChooseUs />
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
