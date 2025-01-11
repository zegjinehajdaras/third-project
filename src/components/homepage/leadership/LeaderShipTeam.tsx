import React from "react";
import LeadershipItem from "./LeadershipItem";
import { leadershipTeam } from "@/configurations";

const LeaderShipTeam = () => {
  return (
    <>
      <hr className="horizontaLine" />
      <div className="bg-grey">
        <div className=" container py-5 ">
          <h1 className="text-center">Our leadership team</h1>
          <p className="text-center py-5 text-white">
            Meet the leaders behind CGD’s mission to protect businesses from
            evolving cyber threats. With deep expertise in cybersecurity and IT
            consulting, our leadership team drives innovation and ensures the
            highest standards of security for our clients. Scroll down to see
            the faces behind our success.
          </p>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-4 gap-4 justify-content-between">
              {leadershipTeam.map((leader, index) => (
                <LeadershipItem
                  key={index}
                  image={leader.image}
                  name={leader.name}
                  title={leader.title}
                  headline={leader.headline}
                  bio={leader.bio}
                  other={leader.other}
                />
              ))}
            </div>
            <p className="highlight text-center pt-5 ">
              Meet the Rest of the Team
            </p>
          </div>
        </div>
      </div>
    </>
  )
};

export default LeaderShipTeam;
