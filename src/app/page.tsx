// components
import { Navbar, Footer, APISection } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";


export default function Campaign() {
  return (
    <>
    <div style={{ background: 'radial-gradient(circle at top, #4ade80, black 60%)' }}>
     {/* className="bg-gradient-to-b from-green-600 to-black min-h-screen"> */}
      <Navbar />
      <Hero />
    </div>
    <div className="bg-gradient-to-b from-black to-black min-h-screen">
      <Feature />
      <APISection />
      <VideoIntro />
      {/* <MobileConvenience /> */}
      <Testimonials />
      {/* <Faqs /> */}
      <Footer />
    </div>
    </>
  );
}
