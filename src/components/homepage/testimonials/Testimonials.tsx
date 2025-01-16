"use client";
import Image from "next/image";
import { useState } from "react";
import TestimonialsItem from "./TestimonialsItem";
import { testimonials } from "@/configurations";
import ArrowRight from "../../../../public/logo/general_logo/right.svg";
import ArrowLeft from "../../../../public/logo/general_logo/left.svg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="my-5 container">
      <h1 className="text-center mb-4">Join our happy customers!</h1>
      <div className="position-relative">
        <div className="d-flex overflow-hidden" style={{ gap: "1rem" }}>
          {testimonials
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((testimonial, index) => (
              <TestimonialsItem
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                text={testimonial.text}
              />
            ))}
        </div>

        <button
          className="btn position-absolute top-100 start-0 translate-middle-y"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <Image src={ArrowLeft} alt="arrow-left" />
        </button>

        <button
          className="btn position-absolute top-100 end-0 translate-middle-y"
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= testimonials.length}
        >
          <Image src={ArrowRight} alt="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
