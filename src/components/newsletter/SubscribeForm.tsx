export default function SubscribeForm() {
  return (
    <div className="row d-flex my-5 p-4">
      <div className="col-md-6">
        <p>
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
  )
}