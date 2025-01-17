import React from "react";

import { useState } from "react";
import MegaMenuItem from "./MegaMenuItem";
import { megaServicesMenuInfo } from "@/configurations";

const MegaMenuPage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const closeMegaMenu = () => {
    setIsMenuOpen(false);
  };



 

  return (
    <div className="container    ">
      <div className=" row row-cols-5    ">
      {
megaServicesMenuInfo.map((item,index)=>{
  return(
    <MegaMenuItem
    key={index}
    icon={item.icon}
    item={item}
    closeMegaMenu={closeMegaMenu}/>
  )
})
      }
     </div>

    </div>
  );
};

export default MegaMenuPage;


