// import React from "react";

// const ChooseUs = () => {
//   return (
//     <div className="mb-4">
//       <div className=" d-flex  justify-content-center  w-100 gap-4 text-size ">
//         <img
//           src="/image/succses_story.png"
//           alt="succesStory"
//           style={{ width: "100px", height: "100px", objectFit: "cover" }}
//         />
//         <div className="vertical-line"></div>
//         <div className="text-start">
//           <p>
//             <span>
//               {" "}
//               <strong>Company:</strong>
//             </span>
//             A small rural hospital
//           </p>

//           <p>

//             <span>
//               <strong>Challenge:</strong>
//             </span>
//             Difficulty in managing patient records and scheduling appointments
//             due to outdated systems
//           </p>

//           <p>
//             <span>
//               <strong>Solution:</strong>
//             </span>{" "}
//             Implemented an Electronic Health Record (EHR) system integrated with
//             telemedicine capabilities
//           </p>
//           <p>
//             <span>
//               <strong>Outcome:</strong>
//             </span>
//             Improved patient care, reduced medical errors, increased patient
//             satisfaction, and expanded access to healthcare services in remote
//             areas.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChooseUs;
"use client";
const cardGroups = [
  
    {
      title: "Company: A small rural hospital",
      challenge:
        "Difficulty in managing patient records and scheduling appointments due to outdated systems",
      solution:
        "Implemented an Electronic Health Record (EHR) system integrated with telemedicine capabilities",
      outcome:
        "Improved patient care, reduced medical errors, increased patient satisfaction, and expanded access to healthcare services in remote areas.",
    },
    {
      title: "Company: A small rural hospital",
      challenge:
        "Difficulty in managing patient records and scheduling appointments due to outdated systems",
      solution:
        "Implemented an Electronic Health Record (EHR) system integrated with telemedicine capabilities",
      outcome:
        "Improved patient care, reduced medical errors, increased patient satisfaction, and expanded access to healthcare services in remote areas.",
    },
    {
      title: "Company: A small rural hospital",
      challenge:
        "Difficulty in managing patient records and scheduling appointments due to outdated systems",
      solution:
        "Implemented an Electronic Health Record (EHR) system integrated with telemedicine capabilities",
      outcome:
        "Improved patient care, reduced medical errors, increased patient satisfaction, and expanded access to healthcare services in remote areas.",
    },
  
  
    {
      title: "Company: Another Hospital",
      challenge: "Limited access to specialized care",
      solution: "Introduced telemedicine to connect patients with specialists",
      outcome:
        "Improved treatment outcomes and reduced travel time for patients.",
    },
    {
      title: "Company: Another Hospital",
      challenge: "Limited access to specialized care",
      solution: "Introduced telemedicine to connect patients with specialists",
      outcome:
        "Improved treatment outcomes and reduced travel time for patients.",
    },
    {
      title: "Company: Another Hospital",
      challenge: "Limited access to specialized care",
      solution: "Introduced telemedicine to connect patients with specialists",
      outcome:
        "Improved treatment outcomes and reduced travel time for patients.",
    },
]


import { useState } from "react";

export default function CardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < cardGroups.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle Previous Button
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className=" my-5  container">
      <h1 className="text-center mb-4">Join our happy customers!</h1>
      <div className="position-relative">
        <div className="d-flex overflow-hidden" style={{ gap: "1rem" }}>
          {cardGroups
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((carditem, index) => (
              <div className=" d-flex  justify-content-center  w-100 gap-4 text-size ">
                <img
                  src="/image/succses_story.png"
                  alt="succesStory"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="vertical-line"></div>
                <div className="text-start">
                  <p>
                    <span>
                      {" "}
                      <strong>Company:</strong>
                    </span>
                 {carditem.title}
                  </p>

                  <p>
                    <span>
                      <strong>Challenge:</strong>
                    </span>
                   {carditem.challenge}
                  </p>

                  <p>
                    <span>
                      <strong>Solution:</strong>
                    </span>{" "}
                    {carditem.solution}
                  </p>
                  <p>
                    <span>
                      <strong>Outcome:</strong>
                    </span>
                   {carditem.outcome}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <button
          className="btn  position-absolute top-100 start-0 translate-middle-y"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 48)"
              fill="#FF6F0F"
            />
            <path
              d="M15.6957 23.9998L28.6002 36.9043L32.3047 33.1998L23.1047 23.9998L32.3047 14.7998L28.6002 11.0953L15.6957 23.9998Z"
              fill="#2A2A2A"
            />
          </svg>
        </button>

        <button
          className=" btn position-absolute top-100 end-0 translate-middle-y"
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= cardGroups.length}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              transform="translate(0 48) rotate(-90)"
              fill="#FF6F0F"
            />
            <path
              d="M32.3043 23.9998L19.3998 36.9043L15.6953 33.1998L24.8953 23.9998L15.6953 14.7998L19.3998 11.0953L32.3043 23.9998Z"
              fill="#2A2A2A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
