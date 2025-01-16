import { advisorsInfo } from "@/configurations"
import LeadershipItem from "../homepage/leadership/LeadershipItem"
const Advisor = () => {





  return (
    <div>
         <h1 className="text-center">Security Awareness Advisors</h1>
        <div className=" row  row-cols-1 row-cols-md-4 justify-content-center gap-4 p-5">
        {
            advisorsInfo.map((info,index)=>{
                return(
                <LeadershipItem
                        key={index}
                        name={info.name}

                        headline={info.headline} image={""} title={""} bio={""} other={""}                
                />
                )
            })
        }
  
        </div>
    </div>
  )
}

export default Advisor