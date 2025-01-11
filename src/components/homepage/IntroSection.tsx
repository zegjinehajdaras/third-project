import Image from "next/image";
import HandshakeLogo from "../../../public/logo/general_logo/introduction/handshake.svg";
import WorldLogo from "../../../public/logo/general_logo/introduction/world.svg";
import TechnoLogo from "../../../public/logo/general_logo/introduction/techno.svg";

const IntroSection = () => {
  return (
    <>
      <hr className='horizontaLine' />
      <div className="intro-section text-center bg-grey ">
        <div className="container pt-5">
          <h1>Who We Are</h1>
          <p className=" p-lg-3 white-p w-75 mx-auto">
            At Cyberware Global Defense (CGD), we are committed to protecting
            the digital future through  innovative solutions that
            safeguard businesses from evolving cyber threats. Our expert team{" "}
            combines cutting-edge technology with a proactive approach to
            cybersecurity, ensuring that your  organization remains
            secure, compliant, and resilient in the face of emerging challenges.
          </p>
          <div className=" row  row-cols-1 row-cols-md-4 justify-content-center">
            <div className=" m-3 d-flex align-items-center text-start border_2  gap-4 ">
              <div>
                <Image src={HandshakeLogo} alt="handshake" />
              </div>
              <div>
                <p className="text-white">
                  Trusted by over <br />
                  <span className="highlight"> 100+ Organizations</span>
                </p>
              </div>
            </div>
            <div className=" m-3 d-flex align-items-center text-start border_2 gap-4">
              <div>
                <Image src={WorldLogo} alt="world" />
              </div>
              <div>
                <p className="text-white">
                  Across <span className="highlight"> <br /> 50+ countries</span>
                </p>
              </div>
            </div>
            <div className=" m-3 d-flex align-items-center text-start border_2 gap-4">
              <div>
                <Image src={TechnoLogo} alt="techno" />
              </div>
              <div>
                <p className="text-white">
                  Use 100%
                  <span className="highlight">
                    <br />
                    Innovative Technology
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
