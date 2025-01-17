import Image from "next/image";
interface RelatedNewsCardProps{
  icon :HTMLImageElement;
    subtitle:string;
    date:string;
    title:string;
    paragraph:string;
}
const RelatedNewsCard = (props:RelatedNewsCardProps) => {
    const{subtitle,date,title,paragraph,icon} = props
  return (
    <div className="related-card card col-12 p-3 rounded-0">
      <span className="  text-end">
       <Image src={icon} alt="icon" />
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
