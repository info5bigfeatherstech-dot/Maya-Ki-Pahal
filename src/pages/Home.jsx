import { useAboutContent } from "../api/hooks";
import FocusAreas from "../components/home/FocusAreas";
import GetInvolvedCTA from "../components/home/GetInvolvedCTA";
import HeroSlider from "../components/home/HeroSlider";
import JoinOurJourney from "../components/home/JoinOurJourney";
import MissionBanner from "../components/home/MissionBanner";
import OurVolunteers from "../components/home/OurVolunteers";
import WelcomeSection from "../components/home/WelcomeSection";
import WhyWeExist from "../components/home/WhyWeExist";

export default function Home() {
  const { data, isError } = useAboutContent();

  return (
    <main>
      <HeroSlider />
      {isError ? (
        <div className="section-wrap py-12 text-center text-charcoal">
          {data?.errors.about ?? "We couldn’t load the foundation information. Please refresh the page to try again."}
        </div>
      ) : (
        <>
          <WelcomeSection />
          <WhyWeExist />
          <MissionBanner />
          <FocusAreas />
          <OurVolunteers />
          <JoinOurJourney />
          <GetInvolvedCTA />
        </>
      )}
      <span className="sr-only" aria-live="polite">
        {data?.navigation.logo}
      </span>
    </main>
  );
}
