import React from "react";
import Image from "next/image";


import { companyInfo } from "@/configurations";
import FooterServicesList from "./FooterServicesList";
import ContactForm from "./ContactForm";

import CyberwareLogo from '../../../../public/logo/general_logo/cyberwarelogo.svg';
import Footer1 from '../../../../public/image/footer/image_1.png';
import Footer2 from '../../../../public/image/footer/image_2.png';
import Footer3 from '../../../../public/image/footer/image_3.png';
import Location from "../../../../public/logo/footer/location.svg";
import Phone from "../../../../public/logo/footer/phone.svg";
import Mail from "../../../../public/logo/footer/mail.svg";
import BottomSection from "./BottomSection";


const Footer = () => {
  return (
    <>
      <footer className="footer py-5">
        <div className="container">
          <div className="row ">
            {/* Logo and Certifications Section */}
            <div className="col-md-3 mb-4 mb-md-0 text-center">
              <Image
                src={CyberwareLogo}
                alt="Cyberware Global Defence Logo"
                width={150}
                height={100}
                className="mb-3"
              />
              <div className="mb-5 d-flex gap-3 justify-content-center ">
                <Image
                  src={Footer1}
                  alt="Certification 1"
                  width={100}
                  height={100}
                  className="img-fluid mb-2"
                />
                <Image
                  src={Footer2}
                  alt="Certification 2"
                  width={100}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <Image
                src={Footer3}
                alt="Allianz Logo"
                width={150}
                height={50}
                className="img-fluid"
              />
            </div>

            {/* Services, About, Team Section */}
            <div className="col-md-4 mb-4 mb-md-0 text-center list p-5">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <FooterServicesList title={companyInfo.services.title} items={companyInfo.services.items} />
                </div>
                <div className="col-md-6 col-lg-4">
                  <FooterServicesList title={companyInfo.aboutUs.title} items={companyInfo.aboutUs.items} />
                  <FooterServicesList title={companyInfo.ourValues.title} items={companyInfo.ourValues.items} />
                </div>
                <div className="col-md-6 col-lg-4">
                  <FooterServicesList title={companyInfo.team.title} items={companyInfo.team.items} />
                  <FooterServicesList title={companyInfo.industriesWeServe.title} items={companyInfo.industriesWeServe.items} />
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-md-3">
              <ContactForm />
            </div>
            <div className="col-md-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188611.61498980896!2d13.259584739103925!3d52.50672915883091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlini%2C%20Gjermani!5e1!3m2!1ssq!2s!4v1730975683559!5m2!1ssq!2s"
                className="pt-5  mb-3 rounded-4 map "
                width={200}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="d-flex gap-3 ">
                <div>
                  <Image src={Location} alt="location" />
                </div>

                <div>
                  <p>Berlin, Germany</p>
                </div>
              </div>
              <div className="d-flex gap-3 ">
                <div>
                  <Image src={Phone} alt="phone" />
                </div>
                <div>
                  <p>00011222333</p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div>
                  <Image src={Mail} alt="mail" />
                </div>
                <div>
                  <p>info@cybergd.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
        </div>
      </footer>
      <BottomSection />
    </>
  );
};

export default Footer;
