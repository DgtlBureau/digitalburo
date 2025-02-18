import { Expertise } from '@/src/components/Main/Expertise/Expertise';
import { NewFeedback } from '@/src/components/Main/Feedback/Feedback';
import { Insights } from '@/src/components/Main/Insights/Insights';
import { NewContactForm } from '@/src/components/Main/NewContactForm/NewContactForm';
import { NewHero } from '@/src/components/Main/NewHero/NewHero';
import { Section } from '@/src/components/shared/Section/Section';
import { getExpertiseAreasMetadata } from '@/src/utils/getExpertiseAreasMetadata';
import { getMainBannerMetadata } from '@/src/utils/getMainBannerMetadata';

const data = getExpertiseAreasMetadata();
const slideData = getMainBannerMetadata();

export const MainPage = () => {
  return (
    <div className='flex flex-col'>
      <NewHero slideData={slideData} />
      <Expertise data={data} />
      <Insights />
      <Section>
        <NewFeedback />
      </Section>
      <Section
        light
        className='px-0 tablet:px-0 desktop:px-0 desktop:py-0'
        id='form'
      >
        <NewContactForm />
      </Section>
    </div>
  );
};
