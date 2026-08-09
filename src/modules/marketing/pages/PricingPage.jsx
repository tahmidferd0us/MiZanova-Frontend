import { useSearchParams } from 'react-router-dom';
import Accordion from '@shared/components/ui/Accordion';
import { PARENT_COMPARISON, PRICING_FAQS, SCHOOL_COMPARISON } from '../data/pricingPlans';
import PageNav from '@shared/components/layout/PageNav';
import ComparisonTable from '../components/pricing/ComparisonTable';
import ParentPricing from '../components/pricing/ParentPricing';
import PricingHeader from '../components/pricing/PricingHeader';
import SchoolPricing from '../components/pricing/SchoolPricing';

const PricingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const audience = searchParams.get('audience') === 'parents' ? 'parents' : 'schools';
  const isParents = audience === 'parents';

  const comparison = isParents ? PARENT_COMPARISON : SCHOOL_COMPARISON;

  return (
    <>
      <PricingHeader audience={audience} onAudienceChange={(next) => setSearchParams(next === 'schools' ? {} : { audience: next }, { replace: true })} />

      {isParents ? <ParentPricing /> : <SchoolPricing />}

      <ComparisonTable title={isParents ? 'Compare plans' : 'Compare features'} columns={comparison.columns} groups={comparison.groups} />

      <section className="bg-surface px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
        <div className="mx-auto flex max-w-[820px] flex-col gap-10">
          <h2 className="text-center text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">Frequently asked questions</h2>
          <Accordion items={PRICING_FAQS} />
        </div>
      </section>

      <PageNav />
    </>
  );
};

export default PricingPage;
