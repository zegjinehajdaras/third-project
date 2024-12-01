"use client";


import React, { useState } from "react";

import TestimonialItem from "./TestimonialsItem";

interface TestimonialsItemProps {
  image: string;
  name: string;

  text: string;
}

const testimonials = [
  {
    image: "/image/lena.png",
    name: "Emily R.",

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
  },
  {
    image: "/image/petar.png",
    name: "Linda T.",

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    image: "/image/lena.png",
    name: "Jessica M.",

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
  },
  {
    image: "/image/petar.png",
    name: "Michael B.",

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
  },
  {
    image: "/image/lena.png",
    name: "Sarah K.",

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
  },
];

const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; 

  // Handle Next Button
  const handleNext = () => {
    if (currentIndex + itemsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle Previous Button
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
  <div className=" my-5  container">
      <h1 className="text-center mb-4">Join our happy customers!</h1>
      <div className="position-relative">
        <div className="d-flex overflow-hidden" style={{ gap: "1rem" }}>
          {testimonials
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((testimonial, index) => (
              <TestimonialItem
              key={index}
                image={testimonial.image}
                name={testimonial.name}
                rating={0}
                text={testimonial.text}
              />
            ))}
        </div>
      
        <button
          className="btn  position-absolute top-100 start-0 translate-middle-y"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 48)"
              fill="#FF6F0F"
            />
            <path
              d="M15.6957 23.9998L28.6002 36.9043L32.3047 33.1998L23.1047 23.9998L32.3047 14.7998L28.6002 11.0953L15.6957 23.9998Z"
              fill="#2A2A2A"
            />
          </svg>
        </button>

        <button
          className=" btn position-absolute top-100 end-0 translate-middle-y"
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= testimonials.length}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              transform="translate(0 48) rotate(-90)"
              fill="#FF6F0F"
            />
            <path
              d="M32.3043 23.9998L19.3998 36.9043L15.6953 33.1998L24.8953 23.9998L15.6953 14.7998L19.3998 11.0953L32.3043 23.9998Z"
              fill="#2A2A2A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
