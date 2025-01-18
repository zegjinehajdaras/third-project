"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Please write a valid email.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.country.trim()) newErrors.country = "Please select a country.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Form submitted !");


    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="mb-3 w-100">
        <label htmlFor="name" className="form-label">
          Full name
        </label>
        <input
          type="text"
          className={` bg-grey form-control ${errors.name ? "is-invalid" : ""}`}
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className={`bg-grey  form-control ${errors.email ? "is-invalid" : ""}`}
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Telephone number
        </label>
        <input
          type="tel"
          className={`bg-grey w-100  form-control ${errors.phone ? "is-invalid" : ""}`}
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="form-label">
          Select your country
        </label>
        <select
          className={`bg-grey form-select ${errors.country ? "is-invalid" : ""}`}
          id="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Your country</option>
          <option value="Germany">Germany</option>
          <option value="Albania">Albania</option>
          <option value="Macedonia">Macedonia</option>
        </select>
        {errors.country && <div className="invalid-feedback">{errors.country}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Send us a Message
        </label>
        <textarea
          className={`  bg-grey form-control ${errors.message ? "is-invalid" : ""}`}
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Your message"
        ></textarea>
        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
      </div>

      <button type="submit" className="btn primaryBtn w-100">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
