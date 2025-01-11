import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


import CyberwareLogo from '../../../../public/logo/general_logo/cyberwarelogo.svg'
import NetworkLogo from '../../../../public/logo/general_logo/network.svg'
import HamburgerMenu from "../../../../public/logo/general_logo/burgermenu.svg"

const TopHeader = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const onLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };


  return (
    <div className="top-bar bg-white py-2 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left - Logo */}
        <Link href="/" className="navbar-brand">
          <Image
            src={CyberwareLogo}
            alt="CYBERWARE Global Defence"
          />
        </Link>

        {/* Right - Links for Large Screens */}
        <div className="d-none d-md-flex align-items-center ">
          <Link
            href="/emergency"
            className="text-dark me-4 text-decoration-none"
          >
            Emergency Response Plan
          </Link>

          {/* Support Dropdown */}
          <div className="dropdown me-4">
            <Link
              className="text-dark dropdown-toggle text-decoration-none"
              href="#"
              role="button"
              id="supportDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Support
            </Link>
          </div>

          {/* Language Selector */}
          <div className="dropdown">
            <button
              className="text-dark dropdown-toggle px-4"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Image src={NetworkLogo} alt="world-logo" />
              {selectedLanguage}
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <Link
                  href="#"
                  className="dropdown-item"
                  onClick={() => onLanguageChange("MK")}
                >
                  <Image src={NetworkLogo} alt="world-logo" />
                  MK
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="dropdown-item"
                  onClick={() => onLanguageChange("AL")}
                >
                  <Image src={NetworkLogo} alt="world-logo" />
                  AL
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="dropdown-item"
                  onClick={() => onLanguageChange("DE")}
                >
                  <Image src={NetworkLogo} alt="world-logo" />
                  DE
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="navbar-toggler d-md-none "
          type="button"
          onClick={handleMobileMenuToggle}
          aria-controls="navbarNav"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <Image src={HamburgerMenu} alt="hamburger menu" />
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="bg-dark bg-opacity-2 text-white p-3 d-md-none">
          <ul className="navbar-nav">
            {/* All links combined in one collapsible menu */}
            <li className="nav-item">
              <Link href="/" className="nav-link ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/aboutus" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/industries" className="nav-link">
                Industries
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="partnerships" className="dropdown-item">
                Partnerships
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contactus" className="nav-link text-white">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/jobs" className="nav-link text-white">
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/newsletter" className="nav-link text-white">
                Newsletter
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link text-white">
                Emergency Response Plan
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="#" className="dropdown-item">
                Support
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-globe"></i> DE
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link href="#" className="dropdown-item">
                    DE
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    EN
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
};

export default TopHeader;