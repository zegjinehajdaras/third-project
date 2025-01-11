import TestimonialsSlider from "@/components/homepage/testimonials/Testimonials";
import PartnershipBlackCard from "@/components/partnerships/PartnershipBlackCard";
import PartnershipCard from "@/components/partnerships/PartnershipCard";
import React from "react";

const PartnershipPage = () => {
  return (
    <div className="bg-grey text-center  ">
      <div className="partnership-banner w-75  mx-auto p-5">
        <h1 className=" w-50  mx-auto mb-5">
          Meet Our Partners & Collaborations
        </h1>
        <p className="white-p">
          At Cyberware Global Defense, we are proud to collaborate with the
          following industry leaders and organizations to provide the best
          cybersecurity solutions to our clients:
        </p>
      </div>
      <PartnershipCard
        image1="/image/brainsterpartner.png"
        image2="/image/br.png"
        title=" Brainster"
        paragraph="Our partnership with Brainster enables us to recruit and train the next generation of cybersecurity professionals. Together, we bring fresh ideas and cutting-edge solutions to the forefront of cyber defense. By combining Brainster’s forward-thinking education programs with our industry expertise, we are building a stronger, more resilient cybersecurity workforce. This collaboration ensures that our team stays ahead of emerging threats, equipped with the skills and knowledge to protect businesses and individuals in an ever-evolving digital landscape."
      />
      <PartnershipBlackCard
        image="/image/mircrosoft.png"
        title="Microsoft"
        paragraph="Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque."
      />
      <PartnershipBlackCard
        image="/image/IQ.png"
        title="Salesforce IQ"
        paragraph="Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque."
        reverse
      />
      <PartnershipCard
        image1="/image/brainsterpartner.png"
        image2="/image/azure.png"
        title=" Azure"
        paragraph="Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque."
      />
      <div className=" p-3 text-white">

        <TestimonialsSlider />
      </div>
    </div>
  );
};

export default PartnershipPage;
