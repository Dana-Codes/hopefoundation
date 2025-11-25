import CampaignHero from "../components/campaigns/CampaignHero";
import CampaignFilter from "../components/campaigns/CampaignFilter";
import CampaignCards from "../components/campaigns/CampaignCards";
import CampaignCTA from "../components/campaigns/CampaignCTA";

export default function Campaigns() {
  return (
    <>
      <CampaignHero />
      <CampaignFilter />
      <CampaignCards />
      <CampaignCTA />
    </>
  );
}
