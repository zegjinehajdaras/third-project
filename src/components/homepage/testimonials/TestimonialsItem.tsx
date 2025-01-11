'use client'

import Image from "next/image";
import StarsLogo from "../../../../public/logo/general_logo/stars.svg";

interface TestimonialsItemProps {
  image: string;
  name: string;
  text: string;
}

const TestimonialItem: React.FC<TestimonialsItemProps> = ({
  image,
  name,
  text,
}) => {

  const imageSrc = `/image/leadership/${image}.png`;
  return (
    <div className='col-12 col-md-4 '>
      <div className="d-flex justify-content-center col-12  col-md-4 w-100">
        <img
          src={imageSrc}
          alt={name}
          className="rounded-circle me-3"
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
        <div className="vertical-line-1 mx-3"></div>
        <div className="text-start">
          <p>{text}</p>
          <p className="fw-bold mb-0">— {name}</p>
          <p className="text-warning mb-0">
            <Image src={StarsLogo} alt="stars" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
