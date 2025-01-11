import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

import ArrowDown from "../../../../public/logo/general_logo/arrow_down.svg"
import MegaMenuPage
  from "@/components/homepage/servicesMenu/MegaServicesMenu";
const BottomHeader = () => {

  const [isServicesMenuVisible, setServicesMenuVisible] = useState(false);
  const [currentSelectedMenu, setCurrentSelectedMenu] = useState('home')

  useEffect(() => {

    if (currentSelectedMenu !== 'services') {
      setServicesMenuVisible(false)
    }

  }, [currentSelectedMenu])

  const toggleServicesMenu = () => {
    setServicesMenuVisible((prev) => !prev);
  };

  const isActiveMenu = (menuName: string) => {
    return currentSelectedMenu === menuName ? " nav-link active-link " : " nav-link ";
  }

  return (
    <div className="bottom-bar bg-dark py-2 d-none d-md-block">
      <div className="container d-flex flex-row justify-content-between align-items-center">
        <div>
          <ul className="navbar-nav d-flex flex-row align-items-center">
            <li className="nav-item ps-4">
              <Link
                href="/"
                onClick={() => setCurrentSelectedMenu('home')}
                className={isActiveMenu('home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item ps-3">
              <Link
                href="/aboutus"
                onClick={() => setCurrentSelectedMenu('aboutus')}
                className={isActiveMenu('aboutus')}
              >
                About Us
              </Link>
            </li>
            {/* Services mega menu */}
            <li className="nav-item ps-3 d-flex align-items-center gap-2">
              <Link
                href=""
                className={isActiveMenu('services')}
                onClick={() => {
                  toggleServicesMenu();
                  setCurrentSelectedMenu('services');
                }}
              >
                Services
              </Link>
              <Image src={ArrowDown} alt="arrow-down" />
            </li>
            <div
              className={`dropdown-menu-1 shadow-lg p-2 position-absolute transition-opacity ${isServicesMenuVisible ? "opacity-100" : "opacity-0"
                }`}
              aria-labelledby="servicesDropdown"
              style={{
                visibility: isServicesMenuVisible ? "visible" : "hidden",
              }}
            >
              <MegaMenuPage />
            </div>

            <li className="nav-item ps-4 d-flex align-items-center gap-2">
              <Link
                href="/industries"
                onClick={() => setCurrentSelectedMenu('industries')}
                className={isActiveMenu('industries')}
              >
                Industries
              </Link>
              <Image src={ArrowDown} alt="arrow-down" />
            </li>

            <li className="nav-item ps-4 d-flex align-items-center ">
              <Link
                href="/partnerships"
                onClick={() => setCurrentSelectedMenu('partnerships')}
                className={isActiveMenu('partnerships')}
              >
                Partnerships
              </Link>
              <Image src={ArrowDown} alt="arrow-down" />
            </li>
          </ul>
        </div>

        <div className="">
          <ul className="navbar-nav d-flex flex-row ">
            <li className="nav-item">
              <Link
                href="/contactus"
                onClick={() => setCurrentSelectedMenu('contactus')}
                className={isActiveMenu('contactus')}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/jobs"
                onClick={() => setCurrentSelectedMenu('jobs')}
                className={isActiveMenu('jobs')}
              >
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/newsletter"
                onClick={() => setCurrentSelectedMenu('newsletter')}
                className={isActiveMenu('newsletter')}
              >
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BottomHeader;