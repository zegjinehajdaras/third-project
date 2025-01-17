import Link from "next/link";
import Image from "next/image";
import ArrowRight from "../../../../public/logo/general_logo/chevron_right.svg";
import React, { ReactNode } from "react";
interface MegaMenuItemProps {
  
item:{
  icon: HTMLImageElement;
  title: string;
  description: string;
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
  info6: string;
  info7: string;
}
  closeMegaMenu: () => void; 
}
const MegaMenuItem = (props: MegaMenuItemProps) => {
  const {
    item:{
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
    },
 
    closeMegaMenu,
  } = props;
  const slug = encodeURIComponent(
    title.toLowerCase().replace(/\s+/g, "").replace(/&/g, "")
  );
  return (
    <div className=" megamenu-contanier   d-flex flex-column ">
      <div className=" card-body  flex-grow-1">
        <span><Image src={icon} alt={title}/></span>

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
         <Image src = {ArrowRight}  alt = {title}/>
        </Link>
      </div>
    </div>
  );
};

export default MegaMenuItem;
