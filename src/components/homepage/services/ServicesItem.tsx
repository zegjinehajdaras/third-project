import Link from "next/link";
import Image from "next/image";
import React, { ReactNode } from "react";

interface ServiceItemProps {
  title: string;
  paragraph: string;
  icon: HTMLImageElement;
}

const ServicesItem = (props: ServiceItemProps) => {
  const { title, paragraph, icon } = props;
  const slug = encodeURIComponent(
    title.toLowerCase().replace(/\s+/g, "").replace(/&/g, "")
  );
  return (
    <div className="card rounded-0   border-0 service-item mb-5  flex-grow-1">
      <div className="card-body d-flex flex-column  flex-grow-1">
        <span className="align-items-center display-4 mb-3">
          <Image src={icon} alt={title} />
        </span>

        <h4 className="card-title mb-2">{title}</h4>

        <p className="card-text flex-grow-1">{paragraph}</p>

        <Link className="btn primaryBtn mt-auto w-75" href={`/${slug}`}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default ServicesItem;
