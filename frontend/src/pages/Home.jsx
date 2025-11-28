

import HomeHero from "../components/home/HomeHero";
import HomeMission from "../components/home/HomeMission";
import HomeFeaturedCampaign from "../components/home/HomeFeaturedCampaign";
import HomeTestimonial from "../components/home/HomeTestimonial";
import HomeCallToAction from "../components/home/HomeCallToAction";
import EmergencyAlert from "../components/home/EmergencyAlert";


export default function Home() {


  



  return (
    <div className="w-full">

    <HomeHero/>

<EmergencyAlert />
     <HomeMission />

     <HomeFeaturedCampaign />

    <HomeTestimonial />
     
     <HomeCallToAction />

    </div>
  );
}
