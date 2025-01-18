interface ServiceBannerProps {
  highlighttext: string;
  title: string;
  paragraph: string;
}

const ServiceBanner = (props: ServiceBannerProps) => {
  const { highlighttext, title, paragraph } = props;
  return (
    <div className="service-banner container-fluid gap-3">
      <h1 className="white-title fw-bold mb-5  ">
        <span className="highlight">{highlighttext}</span> {title}
      </h1>
      <div className="d-flex mb-5 mx-auto w-75 ">
        <div className="vertical-line-1"></div>
        <div className="w-75 mx-auto">
          <p className="white-p">{paragraph}</p>
        </div>
      </div>
      <button className="btn primaryBtn">Get a demo</button>
    </div>
  );
};

export default ServiceBanner;
