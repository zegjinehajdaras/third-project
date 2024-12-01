"use client";
import React, { useState } from "react";
interface CardProps {
  title: string;
  paragraph: string;
  image: string;
  bioparagraph1: string;
  bioparagraph2: string;
}
const Cards = (props: CardProps) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setIsOverlayVisible((prev) => !prev);
  };
  const { title, paragraph, image, bioparagraph1, bioparagraph2 } = props;
  return (
    <>
      <div className=" leader-card position-relative p-2  mb-5 rounded-0  border-0   d-flex flex-column flex-grow-1 h-100 ">
        <img
          src={image}
          className="card-img-top  leader-img w-100 h-auto "
          alt={title}
        ></img> 
        <div className="card-body p-3  bg-darkgrey    flex-grow-1 d-flex flex-column  card-shape  gap-4     ">
          <h5 className="card-title white-title">{title}</h5>
          <p className="card-text white-p  fw-400 ">{paragraph}</p>
        </div>

        <button className="btn mt-auto  arrow-forward  translate-middle ">
          <svg
            onClick={toggleOverlay}
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.6538 23.8334H7.33301V20.1667H29.6538L19.3872 9.90004L21.9997 7.33337L36.6663 22L21.9997 36.6667L19.3872 34.1L29.6538 23.8334Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {isOverlayVisible && (
        
        <div className="overlay-container  ">
          <div className="overlay">
            <div className="  leader-card-overlay position-relative p-2  mb-5 rounded-0  border-0   d-flex flex-column ">
              <img
                src={image}
                className="card-img-top w-100 h-auto "
                alt={title}
              ></img>
              <div className="card-body bg-darkgrey p-3 gap-4   flex-grow-1 d-flex flex-column  card-shape      ">
                <h5 className="card-title white-title">{title}</h5>
                <p className="card-text white-p  fw-400 ">{paragraph}</p>
              </div>

              <button className="btn mt-auto  arrow-forward  translate-middle ">
                <button className="back-arrow " onClick={toggleOverlay}>
                  <svg
                    width="66"
                    height="64"
                    viewBox="0 0 66 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="33" cy="32" rx="33" ry="32" fill="#FF6F0F" />
                    <path
                      d="M25.3452 33.8333H47.666V30.1666H25.3452L35.6118 19.9L32.9993 17.3333L18.3327 32L32.9993 46.6666L35.6118 44.1L25.3452 33.8333Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </button>
            </div>

            <div className="overlay-content row">
              <h2>Bio </h2>
              <div className="col-md-6 text-start">{bioparagraph1}</div>
              <div className="col-md-6 text-start">{bioparagraph2}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;




