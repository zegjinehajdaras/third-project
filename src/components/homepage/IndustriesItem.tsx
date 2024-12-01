import React, { ReactNode } from "react";
interface IndustriesItemProps {
  title: string;
  icon: ReactNode;
}
const IndustriesItem = (props: IndustriesItemProps) => {
  const { title, icon } = props;
  return (
    <div className="industry" >
      <div className="industry-item  ">
        {/* <hr className="w-28 border-2 border-black mr-10   " /> */}
        <span className=" icon "> {icon}</span>
      </div>
      <div className="text-center">
        <h3 className="title">{title}</h3>
      </div>
    </div>
  );
};

export default IndustriesItem;
