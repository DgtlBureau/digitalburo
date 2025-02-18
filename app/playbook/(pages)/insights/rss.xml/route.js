import { getInsightsMetadata } from '@/src/utils/getInsightsMetadata';
import { DateTime } from 'luxon';
import RSS from 'rss';

const allInsights = getInsightsMetadata();

export async function GET() {
  const feed = new RSS({
    title: 'Digital Buro Insights',
    description: 'Latest insights from Digital Buro',
    site_url: 'https://digitalburo.tech',
    feed_url: `https://digitalburo.tech/playbook/insights/rss.xml`,
    copyright: `${new Date().getFullYear()} Digital Buro Insights`,
    language: 'en-us',
    pubDate: new Date().toUTCString(),
  });

  allInsights.forEach((insight) => {
    const formattedDate = insight.date
      ? DateTime.fromFormat(insight.date, 'yyyy-MM-dd').toRFC2822()
      : null;
    feed.item({
      title: String(insight.title),
      description: String(insight.description),
      guid: `https://digitalburo.tech/playbook/insights/${insight.slug}`,
      url: `https://digitalburo.tech/playbook/insights/${insight.slug}`,
      date: formattedDate,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
