import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';
import { getInsightsMetadata } from '@/src/utils/getInsightsMetadata';
import { DateTime } from 'luxon';
import { NextResponse } from 'next/server';
import RSS from 'rss';

const expertises = getExpertiseMetadata('src/expertise');
const insights = getInsightsMetadata();
const expertiseData = expertises.map((item) => {
  return {
    dirName: 'expertise',
    ...item,
  };
});
const insightsData = insights.map((item) => {
  return {
    dirName: 'insights',
    ...item,
  };
});
const allData = [...expertiseData, ...insightsData];

export async function GET() {
  const feed = new RSS({
    title: 'Digital Buro Expertise and Insights',
    description: 'Latest expertise and insights from Digital Buro',
    site_url: 'https://digitalburo.tech/',
    feed_url: 'https://digitalburo.tech/rss',
    copyright: `${new Date().getFullYear()} Digital Buro Expertise`,
    language: 'en-us',
    pubDate: new Date().toUTCString(),
  });

  allData.forEach((item) => {
    const formattedDate = item.date
      ? DateTime.fromFormat(item.date, 'yyyy-MM-dd').toRFC2822()
      : null;
    feed.item({
      title: item.title,
      description: item.description,
      url: `https://digitalburo.tech/playbook/${item.dirName}/${item.slug}`,
      guid: `https://digitalburo.tech/playbook/${item.dirName}/${item.slug}`,
      date: formattedDate,
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
