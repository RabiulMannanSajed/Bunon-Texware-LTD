import AboutBanner from "../AboutBanner/AboutBanner";
import AboutJourney from "../AboutJourney/AboutJourney";
import SamplePolicy from "../SamplePolicy/SamplePolicy";
import WorkingProcess from "../WorkingProcess/WorkingProcess";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <AboutJourney></AboutJourney>
      <WorkingProcess></WorkingProcess>
      <SamplePolicy></SamplePolicy>
    </div>
  );
};

export default AboutPage;
