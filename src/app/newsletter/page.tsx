import HorizontalLine from "@/components/homepage/HorizontalLine";
import NewsLetterBanner from "@/components/newsletter/NewsLetterBanner";
import RelatedNewsCard from "@/components/newsletter/RelatedNews";
import Link from "next/link";
import React from "react";

const NewsLetterPage = () => {
  return (
    <div className="newsletter-section">
      <NewsLetterBanner />
      <div className="container-fluid row    py-5 ">
        <div className="col-md-4 d-flex flex-column gap-3 p-5 ">
          <h4 className="highlight fw-bold ">Related News</h4>
          <hr />
          <RelatedNewsCard
            subtitle="Iranian Hackers Target Critical Infrastructure"
            date="October 20, 2024 "
            title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
            paragraph="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
          />
          <RelatedNewsCard
            subtitle="New Vulnerabilities in Oracle Software"
            date="October 20, 2024"
            title="CISA Warns of Exploited Oracle Vulnerabilities"
            paragraph=" The Cybersecurity and Infrastructure Security Agency (CISA) has issued a warning about two Oracle vulnerabilities that are currently being exploited in the wild. Organizations are urged to apply patches immediately to mitigate risks."
          />
          <RelatedNewsCard
            subtitle="Arrest of Notorious Hacker in Brazil"
            date="October 20, 2024"
            title="Arrest of USDoD Hacker Linked to Major Data Breaches"
            paragraph="Brazilian authorities have arrested a notorious hacker known as USDoD, linked to significant breaches involving National Public Data and InfraGard. This operation marks a crucial step in combating cybercrime on an international scale."
          />
          <h4>Want to become a Contributor</h4>
          <div className=" card d-flex flex-column gap-4  p-4 related-card   ">
            <input
              type="email"
              className=" form-control text-center  "
              placeholder="Your email"
            />
            <div className="form-floating ">
              <textarea
                className="form-control text-center h-100"
                placeholder="Tell us Something About Yourself"
                id="floatingTextarea2"
              ></textarea>
            </div>
            <button className="btn primaryBtn">Send</button>
          </div>
        </div>
        <div className="col-md-8 py-4">
          <hr />
          <h5>Summary</h5>
          <p>
            Phishing attacks have become increasingly sophisticated, leveraging
            social engineering tactics and advanced technology to deceive
            individuals and organizations. This report examines the latest
            trends in phishing, highlights notable case studies, and provides
            actionable prevention strategies to safeguard your digital assets.
          </p>
          <hr />
          <div className="intro">
            <h3>Introduction</h3>
            <p>
              Phishing attacks have become increasingly sophisticated,
              leveraging social engineering tactics and advanced technology to
              deceive individuals and organizations. This report examines the
              latest trends in phishing, highlights notable case studies, and
              provides actionable prevention strategies to safeguard your
              digital assets.
            </p>
          </div>
          <div className="key-trend">
            <h3>Key Trends in Phishing Attacks</h3>
            <span>
              {" "}
              <strong>1.Spear Phishing Campaigns</strong>{" "}
            </span>
            <p>
              Unlike traditional phishing, spear phishing targets specific
              individuals or organizations. Attackers often gather information
              from social media or company websites to craft personalized
              messages that appear legitimate.
            </p>
            <span>
              {" "}
              <strong>2.Use of AI and Automation</strong>{" "}
            </span>
            <p>
              Cybercriminals are increasingly utilizing AI tools to automate
              phishing campaigns, making them more efficient and harder to
              detect. These tools can generate convincing emails that mimic
              trusted sources.
            </p>

            <span>
              {" "}
              <strong>3.Multi-Vector Attacks</strong>{" "}
            </span>
            <p>
              Phishing attacks are no longer limited to email. Attackers are now
              using SMS (smishing), social media platforms, and even voice calls
              (vishing) to reach potential victims through multiple channels.
            </p>
          </div>
          <div className="notable-case">
            <h3>Notable Case Studies</h3>
            <span className="highlight">Case Study 1:</span>{" "}
            <span>
              <strong> Targeting Financial Institutions</strong>
            </span>
            <p>
              In early 2024, a major bank fell victim to a sophisticated spear
              phishing attack that compromised customer data. Attackers
              impersonated bank representatives and sent emails requesting
              sensitive information, leading to significant financial losses.
            </p>
            <span className="highlight">Case Study 2:</span>{" "}
            <span>
              <strong> Ransomware via Phishing Links</strong>
            </span>
            <p>
              A healthcare organization experienced a ransomware attack after
              employees clicked on a malicious link in an email disguised as a
              routine update. The attack encrypted critical patient data,
              causing operational disruptions and reputational damage.
            </p>
          </div>
          <div className="prevention">
            <h3>Prevention Strategies</h3>
            <p className="highlight">
              To combat the rising threat of phishing attacks, organizations
              should implement the following strategies:
            </p>
            <p className="highlight">1. Employee Training Programs</p>
            <p>
              Regular training sessions on recognizing phishing attempts can
              empower employees to identify suspicious emails and links.
              Incorporating simulated phishing exercises can reinforce learning.
            </p>
            <p className="highlight">2. Multi-Factor Authentication (MFA)</p>
            <p>
              Implementing MFA adds an extra layer of security, making it more
              difficult for attackers to gain unauthorized access even if
              credentials are compromised.
            </p>
            <p className="highlight">3. Email Filtering Solutions</p>
            <p>
              Investing in advanced email filtering solutions can help detect
              and block phishing emails before they reach employees’ inboxes.
            </p>
          </div>
          <div className="conclusion">
            <h3>Conclusion</h3>
            <p className="fw-bold">
              As phishing attacks evolve in complexity and frequency,
              organizations must remain vigilant and proactive in their defense
              strategies. By understanding the latest trends and implementing
              robust prevention measures, businesses can significantly reduce
              their risk of falling victim to these deceptive tactics.
            </p>
            <HorizontalLine />
          </div>
        </div>
      </div>
      <div className="row d-flex  bg-darkgrey p-4">
        <div className="col-md-2">
          <Link className="highlight" href={"readmore"}>
            Read more
          </Link>
        </div>
        <div className="col-md-3">
          <RelatedNewsCard
            subtitle="Iranian Hackers Target Critical Infrastructure"
            date="October 20, 2024 "
            title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
            paragraph="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
          />
        </div>
        <div className="col-md-3">
          <RelatedNewsCard
            subtitle="Iranian Hackers Target Critical Infrastructure"
            date="October 20, 2024 "
            title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
            paragraph="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
          />
        </div>
        <div className="col-md-3 ">
          <RelatedNewsCard
            subtitle="Iranian Hackers Target Critical Infrastructure"
            date="October 20, 2024 "
            title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
            paragraph="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
          />
        </div>
      </div>
      <div className="row d-flex my-5 p-4">
        <div className="col-md-6">
          <p>
            {" "}
            <span className="highlight">
              Still haven't subscribed to our Newsletter
            </span>
            . Sign Up today and stay informed about online security and all the
            ways you can protect yourself or your business.{" "}
          </p>
        </div>
        <div className="col-md-6 float-end ">
          <input
            type="email"
            className="form-control text-end mb-4 border-0 border-bottom rounded-0"
            placeholder="Your Email Adress"
          />
          <button className="btn primaryBtn float-end ">Join for Free</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterPage;
