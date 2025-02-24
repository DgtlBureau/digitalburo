import { NewContactForm } from '@/src/components/Main/NewContactForm/NewContactForm';
import { Products } from '@/src/components/NewProducts/Products/Products';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import { BASE_URL } from '@/src/utils/alias';
import { getProductsMetadata } from '@/src/utils/getProductsMetadata';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { pageMetadata } from '@/src/utils/pageMetadata';
import { Metadata } from 'next';

const products = getProductsMetadata();

const title = pageMetadata.investments.title;
const description = pageMetadata.investments.title;
const keywords = pageMetadata.investments.keywords;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  alternates: {
    canonical: new URL(`${BASE_URL}/investments`),
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'digitalburo.tech',
    ...openGraphImage,
    title,
    description,
    url: `${BASE_URL}/investments`,
  },
  keywords,
};

export default function NewProductsPage() {
  return (
    <div className='flex flex-col gap-[60px] bg-white'>
      <Section id='hero' light className='desktop:py-[60px]'>
        <Container>
          <Products products={products} />
        </Container>
      </Section>
      <Section id='contacts' className='py-0 tablet:py-0 desktop:py-0' light>
        <NewContactForm />
      </Section>
    </div>
  );
}
