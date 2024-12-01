import Link from "next/link";
import React, { ReactNode } from "react";
interface MegaMenuItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
  info6: string;
  info7: string;
  closeMegaMenu: () => void; 
}
const MegaMenuItem = (props: MegaMenuItemProps) => {
  const {
    icon,
    title,
    description,
    info1,
    info2,
    info3,
    info4,
    info5,
    info6,
    info7,
    closeMegaMenu
  } = props;
  const slug = encodeURIComponent(
    title.toLowerCase().replace(/\s+/g, "").replace(/&/g, "")
  );
  return (
    <div className=" megamenu-contanier   d-flex flex-column ">
      <div className=" card-body  flex-grow-1">
        <span>{icon}</span>

        <h6 className="megamenu-title">{title}</h6>
        <hr />
        <p className="megamenu-p">{description}</p>
     <hr />
        <div className="megamenu-content">
          <p className=" megamenu-p "> {info1}</p>
          <hr />
          <p className=" megamenu-p">{info2}</p>
          <hr />
          <p className=" megamenu-p">{info3}</p>
          <hr />
          <p className="megamenu-p">{info4}</p>
          <hr />
          <p className=" megamenu-p">{info5}</p>
          <hr />
          <p className=" megamenu-p">{info6}</p>
          <hr />
          <p className=" megamenu-p">{info7}</p>
          <hr />
        </div>
      </div>
      <div className=" card-footer mt-auto ">
        <Link 
        onClick={closeMegaMenu}
          className=" megamenu-button btn  d-flex align-items-center    p-0  "
          href={`/${slug}`}
        >
          {" "}
          <span>explore</span> {title}{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.675 10L7.6 13.075L9 14.5L13.5 10L9 5.5L7.6 6.925L10.675 10ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
              fill="#2A2A2A"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default MegaMenuItem;
