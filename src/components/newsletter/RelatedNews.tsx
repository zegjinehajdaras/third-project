import React from "react";
interface RelatedNewsCardProps{
    subtitle:string;
    date:string;
    title:string;
    paragraph:string;
}
const RelatedNewsCard = (props:RelatedNewsCardProps) => {
    const{subtitle,date,title,paragraph} = props
  return (
    <div className="related-card card col-12 p-3 rounded-0">
      <span className="  text-end">
        <svg
          width="18"
          height="24"
          viewBox="0 0 18 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.25 23.25V3.25C0.25 2.5625 0.494792 1.97396 0.984375 1.48438C1.47396 0.994792 2.0625 0.75 2.75 0.75H15.25C15.9375 0.75 16.526 0.994792 17.0156 1.48438C17.5052 1.97396 17.75 2.5625 17.75 3.25V23.25L9 19.5L0.25 23.25ZM2.75 19.4375L9 16.75L15.25 19.4375V3.25H2.75V19.4375Z"
            fill="#FF6F0F"
          />
        </svg>
      </span>
      <div>
        {" "}
        <h6>{subtitle}</h6>
        <p>{date}</p>
      </div>
      <div className="">
        <h5>{title}</h5>
        <p>{paragraph}</p>
        <button className="btn primaryBtn">Read More</button>
      </div>
    </div>
  );
};

export default RelatedNewsCard;
