import Link from "next/link";
import React from "react";
import MegaMenuPage from "./MegaMenu";

const HeroSection = () => {
  return (
    <section className="hero-section ">
      <div className=" hero-content container position-relative     d-flex flex-column justify-content-center align-items-start  ">
        <div className="text-content">
          <h5 className="text-start">
            {" "}
            <span className="highlight">Your Cybersecurity Experts</span> <br />
            Securing the Future Today{" "}
          </h5>

          <h1 className=" banner-header   fw-bold mt-3">
            Tailored, <span className="highlight">AI-driven solutions</span> to
            protect your business
          </h1>
        </div>
      
          {" "}
          <div className="d-flex  banner-paragraph   ">
            <div className="vertical-line-1 me-3"></div>
            <p className="">
              "Protecting the digital future through innovative cybersecurity
              solutions, we empower businesses to safeguard their assets, ensure
              compliance, and maintain trust in an increasingly connected
              world."
            </p>
          </div>
        </div>

        <div className="hero-buttons text-center  my-lg-4  ">
          <Link href="/consultation" passHref>
            <button className="btn primaryBtn {
"> Free Consultation</button>
          </Link>
          <Link href="/getstarted" passHref>
            <button className="btn primaryBtn"> Get Started Today</button>
          </Link>
        </div>
        <div className="categories   ">
          <button className="btn bg-transparent ">Finance</button>
          <div className="vertical-line-mobile"></div>
          <button className="btn bg-transparent">Healthcare</button>
          <div className="vertical-line-mobile"></div>
          <button className="btn bg-transparent">Government</button>
          <div className="vertical-line-mobile"></div>
          <button className="btn bg-transparent">Retail</button>
          <div className="vertical-line-mobile"></div>
          <button className="btn bg-transparent">Game</button>
          <div className="vertical-line-mobile"></div>
          <button className="btn bg-transparent">Education</button>
        </div>

    </section>
  );
};
export default HeroSection;
