import HorizontalLine from "@/components/homepage/HorizontalLine";
import IndustriesCard from "@/components/industries/IndustriesCard";
import { industriesInfo } from "@/configurations";

const IndustriesPage = () => {
  return (
    <div className="industries-section ">
      <div className=" industries-banner">
        <h1 className="text-white mb-5">
          Industries We <span className="highlight"> Protect</span>
        </h1>
        <p>
          We continuously enhance our services to adapt to the ever-changing
          cyber landscape. Our commitment is to provide top-tier solutions to
          protect your data and operations, regardless of your industry.
        </p>
      </div>
      <div className="d-flex flex-column gap-5 mt-3">
        {industriesInfo.map((industry) => (
          <IndustriesCard
            key={industry.title}
            icon={industry.icon}
            title={industry.title}
            text={industry.text}
          />
        ))}
      </div>
      <div className="my-5">
        <HorizontalLine />
      </div>
      <div className="d-flex flex-wrap container align-items-center py-4">
        <div className="col-12 col-md-6 text-center ">
          <h4 className=" fw-bolder">Not sure if we cover your industry?</h4>
          <p className="primary-text">
            Cyber threats are constantly evolving, and every industry faces
            unique challenges. If you don’t see your sector listed or want to
            learn more about how we can tailor our solutions to your specific
            needs, we’re here to help. Contact us today, and let’s discuss how
            we can protect your business
          </p>
        </div>
        <div className="col-12 col-md-6">
          <input
            type="email"
            className="  form-control w-75 float-end border-0 border-bottom rounded-0  text-end "
            placeholder="Your Email Adress"
          />
          <button className="btn primaryBtn industries-button  float-end mt-5">
            Discuss Your Security Needs
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
