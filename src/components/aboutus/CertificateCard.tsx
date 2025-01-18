import Image from "next/image";
import CertificationLogo from "../../../public/logo/about_us_logo/certification.svg"

const CertificateCard = () => {
  return (
    <div className=" card  bg-darkgrey text-center rounded-0  border-0 p-4 border-bottom">
      <span>
        <Image src={CertificationLogo} alt="Certification Logo" width={200} />
      </span>
      <h5 className="text-white card-title">
        Quality Management <br />
        (DIN EN ISO 9001)
      </h5>
      <p className="text-white card-text">
        ensures consistent quality in our processes, enhancing customer
        satisfaction.
      </p>
      <button className="btn primaryBtn about-us-button">See More</button>
    </div>
  );
};

export default CertificateCard;
