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
      <Hero
        title="HOW TO RECOGNIZE AN ELEWA MEMBER"
        description="Dependable, Creative, Supportive, Open Minded and Fun"
        imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg"
        text1="*SERIOUS WHEN IT MATTERS"
      />
      <WeCareCard
        title="WE CARE!"
        text1="Elewa is a mission-driven organization. We make use of our
            cooperative and shared culture to drive the needle for the
            development of people and environment. We care about our growth, but
            also care deeply about the context surrounding us.
"
        text2="Our investments are therefore not limited to internal ones, but
            contribute heavily to our community and environment. From training
            the next scout leaders on sustainable practices, to bridging the
            employment gap for junior software developers."
      />
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
