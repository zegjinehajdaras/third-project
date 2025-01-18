import ContactForm from "@/components/contact/ContactForm";
import ContactSteps from "@/components/contact/ContactSteps";

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
          <ContactSteps />
        </div>
        <div className="col-12 col-md-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
