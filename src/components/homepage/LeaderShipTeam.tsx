import React from "react";
import LeadershipItem from "./Card";
import HorizontalLine from "./HorizontalLine";

const LeaderShipTeam = () => {
  return (
    <>
      <HorizontalLine />
      <div className="bg-grey ">
        <div className=" container py-5 ">
          <h1 className="text-center">Our leadership team </h1>
          <p className=" text-center py-5  ">
            Meet the leaders behind CGD’s mission to protect businesses from
            evolving cyber threats. With deep expertise in cybersecurity and IT
            consulting, our leadership team drives innovation and ensures the
            highest standards of security for our clients. Scroll down to see
            the faces behind our success.
          </p>
          <div className="container">
            <div className=" row  row-cols-1 row-cols-md-4  gap-4   justify-content-between  ">
              <LeadershipItem
                image="/image/man.png"
                title="Furkan Bajrami "
                paragraph="Lorem ipsum dolor sit amet consectetur. Arcu nullam habitasse tortor id."
                bioparagraph1="Furkan Bajrami is a cyber security expert with over a decade of experience in safeguarding organizations from digital threats. He holds a Master’s degree in Cyber Security from Stanford University and certifications such as Certified Information Systems Security Professional (CISSP) and Certified Ethical Hacker (CEH). John has collaborated with Fortune 500 companies to develop robust security frameworks and incident response strategies, specializing in network security and risk management."
                bioparagraph2="aboPassionate about education, Furkan frequently speaks at industry conferences and conducts workshops to raise awareness about cyber threats and best practices for online safety. As an active member of several professional organizations, he contributes to research initiatives aimed at advancing the field, believing that effective cyber defense relies on empowering individuals and organizations to take proactive measures against potential threats.ut"
              />
              <LeadershipItem
                image="/image/petar.png"
                title="Petar Ninovski Co- Founder & CXX"
                paragraph="Petar has over 10 years of experience in cybersecurity and IT consulting."
                bioparagraph1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"
                bioparagraph2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"
              />
              <LeadershipItem
                image="/image/lena.png"
                title="Lena Müller Chief Technology Officer (CTO)"
                paragraph="With over 12 year of experience in cybersecurity and technology development."
                bioparagraph1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"
                bioparagraph2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"
              />
            </div>
          </div>

          <p className="highlight text-center pt-5 ">
            Meet the Rest of the Team{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default LeaderShipTeam;
