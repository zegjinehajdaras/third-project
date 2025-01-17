import ContactForm from "@/components/contact/ContactForm";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="bg-grey  ">
      <h5 className=" text-center p-5 white-title">
        Your Cybersecurity Experts – Securing the Future Today
      </h5>
      <div className=" container d-flex flex-column flex-md-row py-5 contact-us-section">
        <div className="col-12 col-md-6 contact-page ">
          <h1>Contact Us.</h1>
          <p className="  py-4">We are here to help you secure you future </p>
          <p>Email: info@cyberg.com</p>
          <p>Phone: +49 123 456 789</p>
          <p>Address: Street, Berlin Germany</p>
          <h6 className="pt-5 text-white">What happens next?</h6>
          <div className="mt-4">
            <ul className="timeline-list list-unstyled">
              <li className="d-flex align-items-start mb-4">
                <div className="circle   d-flex justify-content-center align-items-center fw-bold me-3">
                  1
                </div>
                <p className="mb-0">We'll review your cybersecurity needs.</p>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="circle   d-flex justify-content-center align-items-center fw-bold me-3">
                  2
                </div>
                <p className="mb-0">
                  You'll receive a customized security proposal.
                </p>
              </li>
              <li className="d-flex align-items-start">
                <div className="circle  d-flex justify-content-center align-items-center fw-bold me-3">
                  3
                </div>
                <p className="mb-0">
                  Once approved, we'll implement the solutions and support you.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
