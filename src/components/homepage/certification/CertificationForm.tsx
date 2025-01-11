'use client'
import { useState } from "react";

const CertificationForm = () => {


  const [email, setEmail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim() !== '') {
      localStorage.setItem('useEmail', email);
      setEmail('')
    } else {
      alert('Please enter a valid email address!')
    }
  }

  return (
    <div className="row align-items-center mt-5 pt-5">
      <div className="col-12 col-md-6">
        <p className="highlight fw-bold fs-3">
          Stay informed with the latest threat insights delivered directly
          to your inbox through our Newsletter.
        </p>
      </div>
      <div className="col-12 col-md-6 ">
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          className="text-end form-control"
          placeholder="Your email "
        />
        <button className="btn primaryBtn float-end  mt-5" onClick={handleSumbit}>
          Join for Free
        </button>
      </div>
    </div>
  )
}

export default CertificationForm