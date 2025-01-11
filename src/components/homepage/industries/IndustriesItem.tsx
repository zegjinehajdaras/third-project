import Image from "next/image";
interface IndustriesItemProps {
  title: string;
  icon: HTMLImageElement;
}
const IndustriesItem = (props: IndustriesItemProps) => {
  const { title, icon } = props;
  return (
    <div className="industry" >
      <div className="industry-item  ">
        <span className="icon">
          <Image src={icon} alt="icon" />
        </span>
      </div>
      <div className="text-center">
        <h3 className="title">{title}</h3>
      </div>
    </div>
  );
};

export default IndustriesItem;
