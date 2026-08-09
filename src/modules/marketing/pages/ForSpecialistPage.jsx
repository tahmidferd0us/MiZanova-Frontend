import PageNav from '@shared/components/layout/PageNav';
import AcceptanceSection from '../components/forSpecialist/AcceptanceSection';
import EngagementSection from '../components/forSpecialist/EngagementSection';
import ForSpecialistHero from '../components/forSpecialist/ForSpecialistHero';
import SpecialistApplySection from '../components/forSpecialist/SpecialistApplySection';
import SpecialistRoleSection from '../components/forSpecialist/SpecialistRoleSection';

const ForSpecialistPage = () => (
  <>
    <ForSpecialistHero />
    <SpecialistRoleSection />
    <EngagementSection />
    <AcceptanceSection />
    <SpecialistApplySection />
    <PageNav />
  </>
);

export default ForSpecialistPage;
