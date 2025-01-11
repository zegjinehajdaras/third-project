
const VideoSection = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="row d-flex flex-row align-items-center">
        <div className="col-12 col-md-6 ">
          <h1 className="hightlight mb-5 text-start">
            "Always On Guard: Your 24/7 Online Security Solution for Unmatched
            Protection."
          </h1>
          <div className="d-flex justify-content-center gap-3 mb-4">
            <div>
              <button className="btn primaryBtn border_2">Explore our Services</button>
            </div>
            <div>
              <button className="btn primaryBtn border_2">Book a demo</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 video-section overflow-hidden">
          <img
            src="/image/hero/gif.gif"
            loading="lazy"
            className="video-width"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
