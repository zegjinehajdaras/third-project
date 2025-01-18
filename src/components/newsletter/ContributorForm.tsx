export default function ContributorForm() {

  return (
    <>
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
    </>
  )
}