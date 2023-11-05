import CooperativeCard from "./CooperativeCard";
import CultureandValuesCard from "./CultureandValuesCard";
import Hero from "./Hero";
import HowToGetThere from "./HowToGetThere";
import TeamManagementCard from "./TeamManagementCard";
import TimelineCard from "./TimelineCard";
import TransparencyCard from "./TransparencyCard";
import WeCareCard from "./WeCareCard";

const AboutUsLayout1 = () => {
  return (
    <section>
      <Hero />
      <WeCareCard />
      <TeamManagementCard />
      <CultureandValuesCard />
      <CooperativeCard />
      <TransparencyCard />
      <HowToGetThere />
      {/* <MapCard /> */}
      <TimelineCard />
    </section>
  );
};

export default AboutUsLayout1;
