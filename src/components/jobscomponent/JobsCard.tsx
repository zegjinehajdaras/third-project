import React from "react";
 interface JobsCardProps{
    data:string;
    highlightTitle:string;
    title:string;
    paragraph:string;
 }
const JobsCard = (props:JobsCardProps) => {
    const{data,title,highlightTitle,paragraph} = props
  return (
    <div className=" card-job bg-darkgrey d-flex flex-column flex-grow-1  p-4">
      <div className="data mb-3 card-body   ">
        <span className=" badge text-dark bg-white  py-2 px-3 ">{data}</span>
      </div>
      <h6> <span className="highlight">{highlightTitle}</span> {title}</h6>
      <p className="mt-3">{paragraph}</p>
      <div className="d-flex justify-content-between my-4">
        <button className="btn btn-outline-light px-3">Full-Time</button>
        <button className="btn btn-outline-light px-3">On-Site</button>
        <button className="btn btn-outline-light px-3">Hybrid</button>
      </div>
      <button className="btn primaryBtn w-100 jobs-button ">Apply</button>
    </div>
  );
};

export default JobsCard;
