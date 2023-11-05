import CooperativeCard from "./CooperativeCard";
import CultureandValuesCard from "./CultureandValuesCard";
import Hero from "./Hero";
import TeamManagementCard from "./TeamManagementCard";
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
    </section>
  );
};

export default AboutUsLayout1;
