import { Hero } from "@/src/components/Career/Hero/Hero";
import { Internship } from "@/src/components/Career/Internship/Internship";
import { Team } from "@/src/components/Career/Team/Team";
import { NewContactForm } from "@/src/components/Main/NewContactForm/NewContactForm";
import { Container } from "@/src/components/shared/Container/Container";
import { ScrollAnimationWrapper } from "@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper";
import { Section } from "@/src/components/shared/Section/Section";
import { BASE_URL } from "@/src/utils/alias";
import { contentTrimming } from "@/src/utils/contentTrimming";
import { openGraphImage } from "@/src/utils/openGraphParams";
import { pageMetadata } from "@/src/utils/pageMetadata";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const DynamicValues = dynamic(() =>
  import("@/src/components/Career/Values/Values").then((mod) => mod.Values),
);
const DynamicVacancies = dynamic(() =>
  import("@/src/components/Career/Vacanices/Vacancies").then(
    (mod) => mod.Vacancies,
  ),
);

const title = pageMetadata.career.title;
const description = contentTrimming(pageMetadata.career.description, 155);
const keywords = pageMetadata.career.keywords;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/assets/images/info/main_meta.png",
  },
  alternates: {
    canonical: new URL(`${BASE_URL}/career`),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "digitalburo.tech",
    ...openGraphImage,
    title,
    description,
    url: `${BASE_URL}/career`,
  },
  keywords,
};

export default async function CareerPage() {
  return (
    <div className="flex flex-col bg-white">
      <Section light id="hero" className={`relative tablet:px-0`}>
        <Container className="tablet:px-[10px] desktop:px-[10px]">
          <Hero />
        </Container>
      </Section>
      <Section id="team" light>
        <Container>
          <ScrollAnimationWrapper showOnLoad>
            <Team />
          </ScrollAnimationWrapper>
        </Container>
      </Section>
      <div className="flex flex-col-reverse">
        <Section
          id="values"
          className="py-[80px] tablet:py-[80px] desktop:py-[80px]"
          light
        >
          <Container>
            <ScrollAnimationWrapper>
              <DynamicValues />
            </ScrollAnimationWrapper>
          </Container>
        </Section>
        <Section
          id="vacancies"
          className={`bg-gradient-to-r from-[#9747FF] to-[#F8AE3C] section-black-gradient py-[80px] tablet:py-[80px] desktop:py-[80px]`}
        >
          <Container>
            <ScrollAnimationWrapper>
              <DynamicVacancies withRowsBtn={false} isSwipe={false} />
            </ScrollAnimationWrapper>
          </Container>
        </Section>
      </div>
      <Section className="bg-main-bg">
        <Container>
          <Internship />
        </Container>
      </Section>
      <Section id="contacts" className="py-0 tablet:py-0 desktop:py-0" light>
        <NewContactForm />
      </Section>
    </div>
  );
}
