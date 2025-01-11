const BottomSection = () => {

  return (
    <div className="row container-fluid bg-footer p-3 ">
      <div className="col text-center">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a href="/legalnotice" className="text-decoration-none">
                Legal Notice
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/protection" className="text-decoration-none">
                Data Protection
              </a>
            </li>
            <li className="list-inline-item">
              <a href="termofuse" className="text-decoration-none">
                Terms of Use
              </a>
            </li>
          </ul>
          <span className="fw-bold">© Cyberware Global Defense</span>
        </div>
      </div>
    </div>
  )
}

export default BottomSection;