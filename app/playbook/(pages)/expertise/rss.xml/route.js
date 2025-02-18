import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';
import { DateTime } from 'luxon';
import RSS from 'rss';

const allExpertise = getExpertiseMetadata('src/expertise');

export async function GET() {
  const feed = new RSS({
    title: 'Digital Buro Expertise',
    description: 'Latest expertise from Digital Buro',
    site_url: 'https://digitalburo.tech',
    feed_url: `https://digitalburo.tech/playbook/expertise/rss.xml`,
    copyright: `${new Date().getFullYear()} Digital Buro Expertise`,
    language: 'en-us',
    pubDate: new Date().toUTCString(),
  });

  allExpertise.forEach((expertise) => {
    const formattedDate = expertise.date
      ? DateTime.fromFormat(expertise.date, 'yyyy-MM-dd').toRFC2822()
      : null;
    feed.item({
      title: String(expertise.title),
      description: String(expertise.description),
      guid: `https://digitalburo.tech/playbook/expertise/${expertise.slug}`,
      url: `https://digitalburo.tech/playbook/expertise/${expertise.slug}`,
      date: formattedDate,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
