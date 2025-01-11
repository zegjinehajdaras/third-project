'use client'
import Image from "next/image";

import CertificationForm from "./CertificationForm";

import CertificationLogo from "../../../../public/logo/about_us_logo/certification.svg"
import ChevronRight from "../../../../public/logo/general_logo/chevron_right.svg"

const Certification = () => {

  return (
    <div className="container pt-5">
      <div className="row d-flex mb-5">
        <div className="col col-md-6">
          <Image src={CertificationLogo} alt="Certification Logo" />
        </div>
        <div className="p-3 col col-md-6">
          <h1>ISO Certification </h1>
          <p>
            At <span className="highlight">CYBERWARE Global Defense</span> , we
            are proud to be ISO certified, demonstrating our commitment to the
            highest standards of cybersecurity. Our certification reflects our
            dedication to protecting your data and ensuring robust security
            practices across all operations. Trust us to safeguard your digital
            assets with proven excellence.
          </p>

          <div className="gap-4">
            <hr className="border-1 border-black w-72" />
            <div className="d-flex  gap-3">
              <p className="">
                ISO/IEC 27000 — Information security management systems
              </p>
              <Image src={ChevronRight} alt="Chevron Right" />
            </div>
            <hr className="border-1 border-black w-72" />
            <div className="d-flex gap3">
              <p className="">
                ISO/IEC 27001 — Information technology – Security Techniques –
                Information security management
              </p>
              <Image src={ChevronRight} alt="Chevron Right" />
            </div>
            <hr className="border-1 border-black w-72" />
            <div className="d-flex gap-3">
              <p className="">
                ISO/IEC 27002 — Code of practice for information security
                controls
              </p>
              <Image src={ChevronRight} alt="Chevron Right" />
            </div>
            <hr className="border-1 border-black w-72" />
          </div>
          <button className="btn primaryBtn font-semibold px-3 py-2 text-sm sm:text-base md:px-6 md:py-3 lg:px-8 ">
            See All Certificates
          </button>
        </div>
        <CertificationForm />
      </div>
    </div>
  );
};

export default Certification;
