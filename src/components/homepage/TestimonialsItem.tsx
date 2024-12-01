'use client'
import React from "react";

interface TestimonialItemProps {
  active?: boolean; // To specify if the item is the active slide
  image: string;
  name: string;
  rating: number; // Number of stars
  text: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  active = false,
  image,
  name,
  rating,
  text,
}) => {
  return (
    <div className='col-12 col-md-4 '>
      <div className="d-flex justify-content-center col-12  col-md-4 w-100">
       
        <img
          src={image}
          alt={name}
          className="rounded-circle me-3"
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
        <div className="vertical-line-1 mx-3"></div>
        <div className="text-start">
          <p>{text}</p>
          <p className="fw-bold mb-0">— {name}</p>
          <p className="text-warning mb-0">
            <svg
              width="113"
              height="21"
              viewBox="0 0 113 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.848 20.408L6.416 12.776L0.224 8.624H7.808L10.52 0.439999L13.28 8.624H20.816L14.624 12.776L17.24 20.408L10.52 15.536L3.848 20.408ZM26.8871 20.408L29.4551 12.776L23.2631 8.624H30.8471L33.5591 0.439999L36.3191 8.624H43.8551L37.6631 12.776L40.2791 20.408L33.5591 15.536L26.8871 20.408ZM49.9261 20.408L52.4941 12.776L46.3021 8.624H53.8861L56.5981 0.439999L59.3581 8.624H66.8941L60.7021 12.776L63.3181 20.408L56.5981 15.536L49.9261 20.408ZM72.9652 20.408L75.5332 12.776L69.3412 8.624H76.9252L79.6372 0.439999L82.3972 8.624H89.9332L83.7412 12.776L86.3572 20.408L79.6372 15.536L72.9652 20.408ZM96.0043 20.408L98.5723 12.776L92.3803 8.624H99.9643L102.676 0.439999L105.436 8.624H112.972L106.78 12.776L109.396 20.408L102.676 15.536L96.0043 20.408Z"
                fill="#FF6F0F"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
