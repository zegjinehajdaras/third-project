 import { foundersInfo } from "@/configurations";
import LeadershipItem from "../homepage/leadership/LeadershipItem";
const Founders = () => {
  return (
    <div>
      <h1 className="text-center">Our Founders</h1>
      <p className="text-center">
        Here’s a glimpse into the expertise driving CGD’s security solutions:
      </p>

      <div className="container row row-cols-1 row-cols-md-4  gap-5 mx-auto">
{
  foundersInfo.map((info,index)=>{
    return(
      <LeadershipItem
        key={index}
        name={info.name}
        image={info.image}
        title={info.title}
        headline={info.headline}
        bio={info.bio}
        other={info.other}       />
    )
  })
}
      </div>
    </div>
  );
};

export default Founders;
