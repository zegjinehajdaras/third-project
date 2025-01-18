"use client";
import Image from "next/image";
import { useState } from "react";
import ArrowRight from "../../../../public/logo/general_logo/arrow_forward.svg"
import ArrowLeft from "../../../../public/logo/general_logo/backarrow.svg"

interface LeaderProps {
  image: string | null;
  name: string;
  title: string | null;
  headline: string;
  bio: string | null;
  other: string | null;
}


const LeadershipItem = (props: LeaderProps) => {

  const { image, title, name, headline, bio, other } = props;

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible((prev) => !prev);
  };

  const imageSrc = `/image/leadership/${image}.png`;

  return (
    <>
      <div className="leader-card position-relative p-2  mb-5 rounded-0  border-0   d-flex flex-column flex-grow-1 h-100 ">
        <img
          src={imageSrc}
          className="card-img-top leader-img w-100 h-auto "
          alt={title || ""}
        ></img>
        <div className="card-body p-3  bg-darkgrey flex-grow-1 d-flex flex-column  card-shape  gap-4">
          <h5 className="card-title white-title">{name} {title}</h5>
          <p className="card-text white-p  fw-400 ">{headline}</p>
        </div>

        <button onClick={toggleOverlay} className="btn mt-auto  arrow-forward  translate-middle ">
          <Image src={ArrowRight} alt="arrow-right" />
        </button>
      </div>
      {isOverlayVisible && (
        <div className="overlay-container">
          <div className="overlay">
            <div className="leader-card-overlay position-relative p-2  mb-5 rounded-0  border-0   d-flex flex-column ">
              <img
                src={imageSrc}
                className="card-img-top w-100 h-auto "
                alt={title || ""}
              ></img>
              <div className="card-body bg-darkgrey p-3 gap-4 flex-grow-1 d-flex flex-column card-shape">
                <h5 className="card-title white-title">{name}</h5>
                <p className="card-text white-p fw-400">{title}</p>
              </div>

              <button className="btn mt-auto  arrow-forward  translate-middle ">
                <button className="back-arrow" onClick={toggleOverlay}>
                  <Image src={ArrowLeft} alt="arrow-left" />
                </button>
              </button>
            </div>

            <div className="overlay-content row">
              <h2>Bio</h2>
              <div className="col-md-6 text-start">{bio}</div>
              <div className="col-md-6 text-start">{other}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadershipItem;




