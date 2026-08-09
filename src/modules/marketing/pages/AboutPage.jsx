import PageNav from '@shared/components/layout/PageNav';
import AboutHero from '../components/about/AboutHero';
import AdvisorySection from '../components/about/AdvisorySection';
import MissionSection from '../components/about/MissionSection';
import RecognitionSection from '../components/about/RecognitionSection';
import TeamSection from '../components/about/TeamSection';
import ValuesSection from '../components/about/ValuesSection';

const AboutPage = () => (
  <>
    <AboutHero />
    <MissionSection />
    <ValuesSection />
    <TeamSection />
    <AdvisorySection />
    <RecognitionSection />
    <PageNav />
  </>
);

export default AboutPage;
