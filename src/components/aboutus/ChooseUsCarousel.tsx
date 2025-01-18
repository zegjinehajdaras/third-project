
"use client";
import Image from "next/image";
import { useState } from "react";

import { cardGroups } from "@/configurations";
import ArrowRight from "../../../public/logo/general_logo/right.svg"
import ArrowLeft from "../../../public/logo/general_logo/left.svg"



export default function ChooseUsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < cardGroups.length) {
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
          {cardGroups
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((carditem, index) => (
              <div className=" d-flex  justify-content-center  w-100 gap-4 text-size ">
                <img
                  src="/image/succses_story.png"
                  alt="succesStory"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="vertical-line"></div>
                <div className="text-start">
                  <p>
                    <span>
                      {" "}
                      <strong>Company:</strong>
                    </span>
                    {carditem.title}
                  </p>

                  <p>
                    <span>
                      <strong>Challenge:</strong>
                    </span>
                    {carditem.challenge}
                  </p>

                  <p>
                    <span>
                      <strong>Solution:</strong>
                    </span>{" "}
                    {carditem.solution}
                  </p>
                  <p>
                    <span>
                      <strong>Outcome:</strong>
                    </span>
                    {carditem.outcome}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <button
          className="btn  position-absolute top-100 start-0 translate-middle-y"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <Image src={ArrowLeft} alt="arrow-left" />
        </button>

        <button
          className=" btn position-absolute top-100 end-0 translate-middle-y"
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= cardGroups.length}
        >
          <Image src={ArrowRight} alt="arrow-right" />
        </button>
      </div>
    </div>
  );
}
