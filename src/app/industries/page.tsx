import IndustriesBanner from "@/components/industries/IndustriesBanner";
import IndustriesCard from "@/components/industries/IndustriesCard";
import IndustriesForm from "@/components/industries/IndustriesForm";
import { industriesDetails } from "@/configurations";

const IndustriesPage = () => {
  return (
    <div className="industries-section ">
      <IndustriesBanner />
      <div className="d-flex flex-column gap-5 mt-3">
        {industriesDetails.map((industry) => (
          <IndustriesCard
            key={industry.title}
            icon={industry.icon}
            title={industry.title}
            text={industry.text}
          />
        ))}
      </div>
      <div className="my-5">
        <hr className='horizontaLine' />
      </div>
      <IndustriesForm />
    </div>
  );
};

export default IndustriesPage;
