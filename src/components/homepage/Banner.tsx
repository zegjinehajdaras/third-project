import Link from "next/link";
import React from "react";

import { companyInfo } from "@/configurations";



const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className=" hero-content container position-relative d-flex flex-column justify-content-center align-items-start">
        <div className="text-content">
          <h5 className="text-start">
            <span className="highlight">Your Cybersecurity Experts</span> <br />
            Securing the Future Today
          </h5>

          <h1 className="banner-header fw-bold mt-3">
            Tailored, <span className="highlight">AI-driven solutions</span> to
            protect your business
          </h1>
        </div>
        <div className="d-flex banner-paragraph">
          <div className="vertical-line-1 me-3"></div>
          <p>
            "Protecting the digital future through innovative cybersecurity
            solutions, we empower businesses to safeguard their assets, ensure
            compliance, and maintain trust in an increasingly connected
            world."
          </p>
        </div>
      </div>

      <div className="hero-buttons text-center my-lg-4">
        <Link href="/consultation">
          <button className="btn primaryBtn">Free Consultation</button>
        </Link>
        <Link href="/getstarted">
          <button className="btn primaryBtn">Get Started Today</button>
        </Link>
      </div>
      <Categories />

    </section>
  );
};
export default HeroSection;


const Categories = () => {
  return (
    <div className="categories" >
      {companyInfo.industriesWeServe.items.map((category: string, index: number) => {
        const lastCategory = index === companyInfo.industriesWeServe.items.length - 1;
        return (
          <>
            <button key={index} className="btn bg-transparent">{category}</button>
            {!lastCategory && <div key={index} className="vertical-line-mobile"></div>}
          </>
        )
      })}
    </div>
  )
}