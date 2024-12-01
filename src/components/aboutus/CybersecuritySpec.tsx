import React from "react";
import Cards from "../homepage/Card";

const CybersecuritySpec = () => {
  return (
    <div className="bg-grey p-5 mt-5">
      <div className="container">
        <h1 className="text-center mb-5">Cybersecurity Specialists</h1>
        <div className="row row-cols-1 row-cols-md-4 justify-content-center gap-4">
            <Cards
            image="/logo/about_us_logo/lukas.png"
            title="Lukas Schmidt"
            paragraph="Lukas excels in threat detection and network security, identifying vulnerabilities to protect systems from cyber risks."
            
            />
            <Cards image="/logo/about_us_logo/emma.png"
            title="Emma Brown"
            paragraph="Emma designs training programs to boost employee cybersecurity awareness and help organizations stay secure"/>
            <Cards image="/logo/about_us_logo/karl.png"
            title="Karl Müller"
            paragraph="Karl specializes in penetration testing and incident response, helping businesses safeguard against evolving threats."/>

        </div>
      </div>
    </div>
  );
};

export default CybersecuritySpec;
