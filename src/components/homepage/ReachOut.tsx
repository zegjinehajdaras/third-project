'use client'
import React, { useState } from 'react';


const ReachOut = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() !== '') {
      localStorage.setItem('userEmail', email);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="container-sm p-4 bg-darkgrey text-center h-80 mx-auto mb-20 mx-auto">
      <p className="white-p pt-14 font-semibold">
        Reach out to our team at CGD, and we'll help <br /> you protect your digital future.
      </p>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-wrap mb-2 align-items-center justify-content-center"
      >
        <input
          type="email"
          className="text-center font-semibold py-2 rounded-0 border-0 px-5"
          placeholder="Email Address"
          value={email} 
          onChange={handleInputChange} 
        />
        <button className="btn py-2 px-5 primaryBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReachOut;
