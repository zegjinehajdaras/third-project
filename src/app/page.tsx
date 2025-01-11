import HeroSection from "@/components/homepage/Banner";
import Services from "@/components/homepage/services/Services";
import IntroSection from "@/components/homepage/IntroSection";
import VideoSection from "@/components/homepage/VideoSection";
import Industries from "@/components/homepage/industries/Industries";
import LeaderShipTeam from "@/components/homepage/leadership/LeaderShipTeam";
import Partners from "@/components/homepage/Partners";
import ReachOut from "@/components/homepage/ReachOut";
import Certification from "@/components/homepage/certification/Certification";
import Testimonials from "@/components/homepage/testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <IntroSection />
      <VideoSection />
      <Industries />
      <LeaderShipTeam />
      <Partners />
      <ReachOut />
      <Certification />
      <Testimonials />
    </div>
  );
}
