import TestimonialsSlider from "@/components/homepage/testimonials/Testimonials";
import PartnershipBanner from "@/components/partnerships/PartnershipBanner";
import PartnershipBlackCard from "@/components/partnerships/PartnershipBlackCard";
import PartnershipCard from "@/components/partnerships/PartnershipCard";
import { partnershipsDetails } from "@/configurations/partnershipsDetails";

const PartnershipPage = () => {
  return (
    <div className="bg-grey text-center">
      <PartnershipBanner />

      {partnershipsDetails.map((partnership) => {

        const hasMultipleImages = Array.isArray(partnership.image);
        const isReverse = partnershipsDetails.indexOf(partnership) % 2 === 0;

        if (hasMultipleImages) {
          return (
            <PartnershipCard
              images={partnership.image}
              title={partnership.title}
              description={partnership.description}
            />
          )
        } else {
          return (
            <PartnershipBlackCard
              image={partnership.image}
              title={partnership.title}
              description={partnership.description}
              reverse={isReverse}
            />
          )
        }
      })}
      <div className=" p-3 text-white">
        <TestimonialsSlider />
      </div>
    </div>
  );
};

export default PartnershipPage;
