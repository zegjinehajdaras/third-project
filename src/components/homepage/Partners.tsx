
import Image from "next/image";
import BrainsterLogo from "../../../public/logo/partners/brainsterlogo.svg";
import MicrosoftLogo from "../../../public/logo/partners/microsoft.svg";
import NetflixLogo from "../../../public/logo/partners/netflix.svg";
import DBLogo from "../../../public/logo/partners/db.svg";
import AmazonLogo from "../../../public/logo/partners/amazon.svg";
import GoogleLogo from "../../../public/logo/partners/google.svg";

const Partners = () => {
  return (
    <div className="text-center container-fluid py-5">
      <div>
        <h1>Our Partners</h1>
        <div className="partner-logos-wrapper py-5 container-fluid">
          <div className="partner-logos gap-5">
            <div className="col">
              <Image src={BrainsterLogo} alt="Brainster Logo" />
            </div>
            <div className="col ">
              <Image src={MicrosoftLogo} alt="Microsoft Logo" />
            </div>
            <div className="col column">
              <Image src={NetflixLogo} alt="Netflix Logo" />
            </div>
            <div className="col ">
              <Image src={DBLogo} alt="DB Logo" />
            </div>
            <div className="col ">
              <Image src={AmazonLogo} alt="Amazon Logo" />
            </div>
            <div className="col  ">
              <Image src={GoogleLogo} alt="Google Logo" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Partners;
