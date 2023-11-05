import Hero from "./Hero";
import Careers from "./Careers";
import CooperativeMindsetCard from "./CooperativeMindsetCard";
import BeyondBusinessCard from "./BeyondBusinessCard";
import OpenKnowledgeCard from "./OpenKnowledgeCard";
import ImpactProjects from "./ImpactProjects";
const AboutLayout = () => {
  return (
    <section className="w-full p-0 m-0">
      <Hero
        title="Scaling impact. Beyond the norm"
        description=" Human and Environmental 
            Impact through Social  Enterprise"
        imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg"
      />
      <Careers />
      <CooperativeMindsetCard
        title="A cooperative mindset"
        description=" Elewa has one shared objective; To unlock the true potential of
            individuals, teams, and the community. We believe strongly in the
            power of sharing ideas and continuously strive to grow each other
            and ourselves. Internally, but also within the larger communities in
            which we are active."
        imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"
      />
      <BeyondBusinessCard
        title="Beyond business"
        description="We channel a good amount of our resources into giving back. 
        Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term"
        imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"
      />
      <OpenKnowledgeCard
        imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png"
        title="Open knowledge"
        description="Open knowledge What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher) and academic partnerships. We build for today, with a lens on tomorrow."
      />
      <ImpactProjects />
    </section>
  );
};

export default AboutLayout;
