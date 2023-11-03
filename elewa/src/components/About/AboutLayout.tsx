import Hero from "./Hero";
import Careers from "./Careers";
import CooperativeMindsetCard from "./CooperativeMindsetCard";
import BeyondBusinessCard from "./BeyondBusinessCard";
import OpenKnowledgeCard from "./OpenKnowledgeCard";
const AboutLayout = () => {
  return (
    <section className="w-full">
      <Hero />
      <Careers />
      <CooperativeMindsetCard />
      <BeyondBusinessCard />
      <OpenKnowledgeCard />
    </section>
  );
};

export default AboutLayout;
