import React from "react";
interface PartnershipBlackCardProps {
  image: string;
  title: string;
  paragraph: string;
  reverse?: boolean;
}
const PartnershipBlackCard = (props: PartnershipBlackCardProps) => {
  const { image, title, paragraph, reverse = false } = props;
  return (
    <div className="container  bg-darkgrey text-white">
      <div
        className={`d-flex flex-column flex-md-row ${
          reverse ? "flex-md-row-reverse" : ""
        } align-items-center my-4`}
      >
        <div className="col-md-6  p-3 ">
          <img src={image} alt={title}
          className="img-fluid" />
        </div>
        <div className="col-md-6 p-3 text-start">
          <h3 className="text-white">
            Partnership with <span className="highlight">{title}</span>{" "}
          </h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipBlackCard;
