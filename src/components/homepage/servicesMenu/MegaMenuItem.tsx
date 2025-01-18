import Link from "next/link";
import Image from "next/image";
import ArrowRight from "../../../../public/logo/general_logo/chevron_right.svg";

interface MegaMenuItemProps {
  keyId: number;
  icon: HTMLImageElement;
  title: string;
  description: string;
  subservices: string[];
  toggleServicesMenu: () => void;
}

const MegaMenuItem = (props: MegaMenuItemProps) => {
  const {
    keyId,
    icon,
    title,
    description,
    subservices,
    toggleServicesMenu,
  } = props;

  const slug = encodeURIComponent(
    title.toLowerCase().replace(/\s+/g, "").replace(/&/g, "")
  );

  return (
    <div key={keyId + title} className=" megamenu-contanier d-flex flex-column ">
      <div className=" card-body  flex-grow-1">
        <span><Image src={icon} alt={title} /></span>

        <h6 className="megamenu-title">{title}</h6>
        <hr />
        <p className="megamenu-p">{description}</p>
        <hr />
        <div key={keyId + title} className="megamenu-content">
          {subservices.map((subservice, index) => (
            <>
              <p key={index} className="megamenu-p">{subservice}</p>
              <hr />
            </>
          ))}
        </div>
      </div>
      <div className="card-footer mt-auto">
        <Link onClick={toggleServicesMenu} className=" megamenu-button btn  d-flex align-items-center p-0" href={`/${slug}`}
        >
          <span>Explore</span> {title}{" "}
          <Image src={ArrowRight} alt={title} />
        </Link>
      </div>
    </div>
  );
};

export default MegaMenuItem;
