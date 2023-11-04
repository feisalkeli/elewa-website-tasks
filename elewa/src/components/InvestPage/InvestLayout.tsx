import CreativeHub from "./CreativeHub";
import Hero from "./Hero";
import HowweSeeItDifferentCard from "./HowweSeeItDifferentCard";
import InvestingCard from "./InvestingCard";
import KeyFigures from "./KeyFigures";
import StakeHolders from "./StakeHolders";
import MissionCard from "./MissionCard";

const InvestLayout = () => {
  return (
    <section>
      <Hero />
      <HowweSeeItDifferentCard />
      <KeyFigures />
      <StakeHolders />
      <CreativeHub />
      <InvestingCard />
      <MissionCard />
    </section>
  );
};

export default InvestLayout;
