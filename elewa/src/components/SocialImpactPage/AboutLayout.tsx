import Hero from "./Hero";
import Careers from "./Careers";
import CooperativeMindsetCard from "./CooperativeMindsetCard";
import BeyondBusinessCard from "./BeyondBusinessCard";
import OpenKnowledgeCard from "./OpenKnowledgeCard";
import ImpactProjects from "./ImpactProjects";
const AboutLayout = () => {
  return (
    <section className="w-full p-0 m-0">
      <Hero />
      <Careers />
      <CooperativeMindsetCard />
      <BeyondBusinessCard />
      <OpenKnowledgeCard />
      <ImpactProjects />
    </section>
  );
};

export default AboutLayout;
