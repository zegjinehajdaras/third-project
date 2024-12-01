import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/homepage/Banner";
import Services from "@/components/homepage/Services";
import IntroSection from "@/components/homepage/IntroSection";
import VideoSection from "@/components/homepage/VideoSection";
import Industires from "@/components/homepage/Industires";
import LeaderShipTeam from "@/components/homepage/LeaderShipTeam";
import Partners from "@/components/homepage/Partners";
import ReachOut from "@/components/homepage/ReachOut";
import { Certificate } from "crypto";
import Certification from "@/components/homepage/Certification";
import Testimonials from "@/components/homepage/Testimonials";
import MegaMenuPage from "@/components/homepage/MegaMenu";

// pages/index.js or pages/index.tsx

export default function Home() {
  return (
  <div>
    <HeroSection/>
    <Services/>
    <IntroSection/>
    <VideoSection/>
    <Industires/>
    <LeaderShipTeam/>
    <Partners/>
    <ReachOut/>
    <Certification/>
    <Testimonials/>
    {/* <MegaMenuPage/> */}
  </div>
  );
}
