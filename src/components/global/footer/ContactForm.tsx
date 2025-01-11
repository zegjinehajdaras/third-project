const ContactForm = () => {

  return (
    <div>
      <h2>
        Contact <span className="highlight">us</span>
      </h2>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control bg-grey border-0 border-bottom rounded-0 "
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control bg-grey border-0 border-bottom rounded-0"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control bg-grey border-0 border-bottom rounded-0"
            placeholder="Message"
            rows={3}
          ></textarea>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="newsletterCheck"
          />
          <label
            className="form-check-label"
            htmlFor="newsletterCheck"
          >
            I would like to receive the newsletter.
          </label>
        </div>
        <button type="submit" className="btn primaryBtn w-100">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm;