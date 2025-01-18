import { leadershipTeam } from "@/configurations";

import LeadershipItem from "../homepage/leadership/LeadershipItem";

const CybersecuritySpec = () => {
  return (
    <div className="bg-grey p-5 mt-5">
      <div className="container">
        <h1 className="text-center mb-5">Cybersecurity Specialists</h1>

        <div className="row row-cols-1 row-cols-md-4 justify-content-center gap-4">
          {leadershipTeam.map((leader, index) => {
            return (
              <LeadershipItem
                key={index}
                image={leader.image}
                name={leader.name}
                title={leader.title}
                headline={leader.headline}
                bio={leader.bio}
                other={leader.other}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CybersecuritySpec;
